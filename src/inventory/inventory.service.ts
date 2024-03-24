import { Injectable } from '@nestjs/common';
import { CreateInventoryInput } from './dto/create-inventory.input';
import { UpdateInventoryInput } from './dto/update-inventory.input';
import { faker } from '@faker-js/faker';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { DataSource, Like, Repository } from 'typeorm';
import { RackService } from 'src/rack/rack.service';
import { InventoryPricesService } from 'src/inventory-prices/inventory-price.service';
import { FindInventoryInput } from './dto/find-one-inventory.input';
import { ForbiddenError } from '@nestjs/apollo';
import { PaginateInventoryInput } from './dto/paginateInventory.input';
import { buildPaginator } from 'typeorm-cursor-pagination';

@Injectable()
export class InventoryService {

  constructor(@InjectRepository(Inventory) private readonly inventoryRepo:Repository<Inventory>,
  private rackService:RackService,
  private inventoryPricesService:InventoryPricesService,
  private dataSource:DataSource,){}

  async create(input: CreateInventoryInput) {

    const queryRunner = this.dataSource.createQueryRunner();

    let success:boolean = false;
    try{  
      await queryRunner.connect();
      await queryRunner.startTransaction();

      const result = await queryRunner.manager.insert(Inventory, {
        name: input.name,
        zoneId: input.zoneId,
        module: input.module,
        location: input.location,
        rentType: input.rentType,
        hubId: input.hubId
      });

      if (result.raw.affectedRows === 1){
        if (input.numberOfRacks > 0){
          const res = await this.rackService.createFromInventory(result.raw.insertId, queryRunner, input);
          if (res === true){
            if (input.inventoryPrices?.length > 0){
              success = await this.inventoryPricesService.createFromInventory(result.raw.insertId, queryRunner, input.inventoryPrices);
            }else{
              success = true;
            }
          }
        }
        success = true;
      }

      await queryRunner.commitTransaction();
      return success;
    }catch (e){
      console.log(e);
      await queryRunner.rollbackTransaction();
    }finally{
      console.log('releasing');
      queryRunner.release();
    }
    

  }

  async createFake(count:number){ 

    for (let i = 0; i< count ; i++){
      const dta = {
        name: faker.company.name(),
        zoneId: 1,
        location: {long: 0, lat: 0},
        module: 1,
        rentType: 1
      }

      const queryRunner = this.inventoryRepo.manager; // Access QueryRunner
      const result = await queryRunner.query(`INSERT INTO inventory (name, zoneId, location, module, rentType) 
      Values ('${dta.name}', ${dta.zoneId}, POINT(${dta.location.long}, ${dta.location.lat}), ${dta.module}, ${dta.rentType})`);
      console.log('created inventory: id->', result['insertId']);
      this.rackService.createFake(result['insertId']);
      
    }
    
    return true;
    
  }

  paginateInventories(input:PaginateInventoryInput) {


    let queryBuilder = this.inventoryRepo.createQueryBuilder();

    let whereSet = false;

    if (input.hubId != undefined && input.hubId != null){
      queryBuilder = queryBuilder.where({ hubId: input.hubId });
      whereSet = true;
    } 

    if (input.name != undefined && input.name != null){
      if (whereSet){
        queryBuilder = queryBuilder.andWhere({ name: Like(`%${input.name}%`) });
      }else{
        queryBuilder = queryBuilder.where({ name: Like(`%${input.name}%`) });
        whereSet = true;
      }
    } 

    const paginator = buildPaginator({
      entity: Inventory,
      paginationKeys: ["createdAt"],
      query: {
        limit: input.limit,
        order: input.isAsc ? 'ASC' : "DESC",
        afterCursor: input.afterCursor,
        beforeCursor: input.beforeCursor
      }
    })

    return paginator.paginate(queryBuilder);

  }

  async findOne({ id, hubId } : FindInventoryInput): Promise<Inventory> {
    console.log(`${id} ${hubId}`);
    let queryBuilder = this.inventoryRepo.createQueryBuilder();
    let isWhere = false;
    if (id > 0){
      queryBuilder = queryBuilder.where({id})
      isWhere = true;
    }

    if (hubId > 0){
      if (isWhere){
        queryBuilder = queryBuilder.andWhere({hubId})
      }else{
        queryBuilder = queryBuilder.where({hubId})
      }
    }

    if (hubId > 0 || id > 0) return await queryBuilder.getOne();
    
    throw new ForbiddenError("cannot query");
    
  }

  update(id: number, updateInventoryInput: UpdateInventoryInput) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}
