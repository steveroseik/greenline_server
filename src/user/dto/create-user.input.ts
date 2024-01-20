import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, IsDate, IsInt, IsNumber } from 'class-validator';

@InputType()
export class CreateUserInput {


  @Field({nullable: true})
  id?: string

  @IsAlpha()
  @Field()
  name: string;

  @IsAlpha()
  @Field()
  email: string;

  @IsInt()
  @Field()
  type: number

  @IsDate()
  @Field()
  birthdate: Date;

  @Field({nullable: true})
  createdAt?: Date

  @Field({nullable: true})
  lastModified?: Date

}
