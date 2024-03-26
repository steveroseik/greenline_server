import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('merchant-customer')
export class MerchantCustomer {

  @PrimaryGeneratedColumn()
  @Field()
  id: number

  @Column('int', { name: "merchantId" })
  @Field()
  merchantId: number

  @Column('int', { name: "customerId" })
  @Field()
  customerId: number
    
  @Column('varchar', { name: "customerName" })
  @Field()
  customerName: string


  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date

}
