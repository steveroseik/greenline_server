import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, IsDate, IsEnum, IsInt, IsNumber, IsPhoneNumber, IsString, isEnum } from 'class-validator';
import { UserType } from 'support/enums';

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

  @IsEnum(() => UserType )
  @Field(() => UserType)
  type: UserType

  @IsDate()
  @Field()
  birthdate: Date;

}
