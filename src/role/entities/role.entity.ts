import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserRole } from 'src/user-role/entities/user-role.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @Column("timestamp", { name: "createdAt" })
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified" })
  @Field()
  lastModified: Date;


  @OneToMany(() => UserRole, (userRole) => userRole.role)
  @Field(() => [UserRole])
  roleAssigns: UserRole[];

}
