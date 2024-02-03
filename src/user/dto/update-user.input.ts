import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsAlpha, IsDate, IsPhoneNumber, IsString } from 'class-validator';
@InputType()
export class UpdateUserInput{
  
  @IsAlpha()
  @Field({ nullable: true })
  name?: string;

  @IsAlpha()
  @Field({ nullable: true })
  email?: string;

  @IsPhoneNumber()
  @Field({ nullable: true })
  phone?: string;

  @IsString()
  @Field({ nullable: true })
  type?: string

  @IsDate()
  @Field({ nullable: true })
  birthdate?: Date;

}
