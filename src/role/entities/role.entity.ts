import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserRole } from 'src/user-role/entities/user-role.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("role", { schema: "greenline_db" })
@ObjectType()
export class Role {

  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column("varchar", { name: "name" })
  @Field()
  name: string

  @Column("varchar", { name: "type" })
  @Field()
  type: string

  @Column("varchar", { name: "description" })
  @Field()
  description: string

@CreateDateColumn({ type: "timestamp" })
  @Field()
  createdAt: Date;

@UpdateDateColumn({ type: "timestamp" })
  @Field()
  lastModified: Date;

}
