import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, IsDate, IsInt, IsNumber, IsPhoneNumber } from 'class-validator';

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

  @IsPhoneNumber()
  @Field()
  phone: string;

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
