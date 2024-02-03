import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, IsDate, IsInt, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

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

  @IsString()
  @Field()
  type: string

  @IsDate()
  @Field()
  birthdate: Date;

}
