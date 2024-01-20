import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Role } from 'src/role/entities/role.entity';
import { User } from 'src/user/entities/user.entity';

import { PrimaryColumn, Entity, JoinColumn, Index, ManyToOne} from 'typeorm';

@Index("userId", ["userId"], {})
@ObjectType()
@Entity("userRole", { schema: "greenline_db" })
export class UserRole {


  @PrimaryColumn({name: "userId", type: 'varchar'})
  @Field()
  userId: string;

  @PrimaryColumn({name: "roleId", type: 'int'})
  @Field()
  roleId: number;


  @ManyToOne(() => User, (user) => user.userRoles)
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  @Field(() => User)
  user: User;

  @ManyToOne(() => Role, (role) => role.roleAssigns)
  @JoinColumn([{ name: "roleId", referencedColumnName: "id" }])
  @Field(() => Role)
  role: Role;
}
