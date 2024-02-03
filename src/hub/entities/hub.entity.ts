import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('hub', {schema: 'greenline_db'})
@ObjectType()
export class Hub {

  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column('varchar', {name: 'name', length: 15})
  @Field()
  name: string

  @Column('int', {name: 'gonvernorateId'})
  @Field()
  governorateId: number

  @Column('int', {name: 'zoneId'})
  @Field()
  zoneId: number
}
