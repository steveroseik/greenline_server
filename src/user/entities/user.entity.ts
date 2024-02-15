import { Column, Entity, ManyToMany, OneToMany } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UserType } from "support/enums";

@Entity("user", { schema: "greenline_db" })
@ObjectType('user')
export class User {


  @Column("varchar", { primary: true, name: "id" })
  @Field()
  id: string;

  @Column("enum", { name: "type", enum: UserType, default: UserType.customer })
  @Field(() => UserType)
  type: UserType

  @Column("int", { name: "hubId" , nullable: true})
  @Field({nullable: true})
  hubId: number;

  @Column("int", { name: "merchantId" , nullable: true})
  @Field({ nullable: true})
  merchantId: number;

  @Column("varchar", { name: "name", length: 255 })
  @Field()
  name: string;

  @Column("varchar", { name: "email", length: 255, unique: true })
  @Field()
  email: string;

  @Column("varchar", { name: "phone", length: 15})
  @Field()
  phone: string;

  @Column("datetime", { name: "birthdate" })
  @Field()
  birthdate: Date;

  @Column('varchar', { name: 'refreshToken', length: 64, nullable: true})
  @Field({nullable: true})
  refreshToken?: string;


  @Column("timestamp", { name: "createdAt", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  createdAt: Date;

  @Column("timestamp", { name: "lastModified", default: () => 'CURRENT_TIMESTAMP'})
  @Field()
  lastModified: Date;

  @Column("timestamp", { name: "deletedAt", nullable: true})
  @Field({nullable: true})
  deletedAt: Date;
}
