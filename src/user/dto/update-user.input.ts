import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsAlpha, IsDate, IsEnum, IsPhoneNumber, IsString } from 'class-validator';
import { UserType } from 'support/enums';
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

  @IsEnum(() => UserType)
  @Field(() => UserType, { nullable: true })
  type?: UserType

  @IsDate()
  @Field({ nullable: true })
  birthdate?: Date;

}
