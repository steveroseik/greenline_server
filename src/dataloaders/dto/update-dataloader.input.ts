import { CreateDataloaderInput } from './create-dataloader.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDataloaderInput extends PartialType(CreateDataloaderInput) {
  @Field(() => Int)
  id: number;
}
