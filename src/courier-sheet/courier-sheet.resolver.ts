import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent, Context } from '@nestjs/graphql';
import { CourierSheetService } from './courier-sheet.service';
import { CourierSheet } from './entities/courier-sheet.entity';
import { CreateCourierSheetInput } from './dto/create-courier-sheet.input';
import { UpdateCourierSheetInput } from './dto/update-courier-sheet.input';
import { SheetOrder } from 'src/sheet-order/entities/sheet-order.entity';
import { DataloaderRegistry } from 'src/dataloaders/dataLoaderRegistry';
import { PaginateCourierSheetInput } from './dto/paginate-courier-sheet.input';
import { CourierSheetPage } from './entities/courier-sheet-page';

@Resolver(() => CourierSheet)
export class CourierSheetResolver {
  constructor(private readonly courierSheetService: CourierSheetService) {}

  @Mutation(() => Boolean)
  createCourierSheet(@Args('input') createCourierSheetInput: CreateCourierSheetInput) {

    return this.courierSheetService.create(createCourierSheetInput);
  }

  @Query(() => [CourierSheet])
  findAllCourierSheets() {
    return this.courierSheetService.findAll();
  }

  @Query(() => CourierSheetPage)
  paginateCourierSheets(@Args('input') input:PaginateCourierSheetInput){

    return this.courierSheetService.paginateById(input);  
  }

  @Mutation(() => CourierSheet)
  updateCourierSheet(@Args('updateCourierSheetInput') updateCourierSheetInput: UpdateCourierSheetInput) {
    return this.courierSheetService.update(updateCourierSheetInput.id, updateCourierSheetInput);
  }

  @Mutation(() => CourierSheet)
  removeCourierSheet(@Args('id', { type: () => Int }) id: number) {
    return this.courierSheetService.remove(id);
  }

  @ResolveField(() => [SheetOrder])
  orders(@Parent() courierSheet:CourierSheet,
  @Context() { loaders } : { loaders: DataloaderRegistry }){

    return loaders.SheetOrdersDataLoader.load(courierSheet.id);

  }
}
