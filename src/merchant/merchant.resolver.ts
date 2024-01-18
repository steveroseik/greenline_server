import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MerchantService } from './merchant.service';
import { Merchant } from './entities/merchant.entity';
import { CreateMerchantInput } from './dto/create-merchant.input';
import { UpdateMerchantInput } from './dto/update-merchant.input';

@Resolver(() => Merchant)
export class MerchantResolver {
  constructor(private readonly merchantService: MerchantService) {}

  @Mutation(() => Merchant)
  createMerchant(@Args('createMerchantInput') createMerchantInput: CreateMerchantInput) {
    return this.merchantService.create(createMerchantInput);
  }

  @Query(() => [Merchant], { name: 'merchant' })
  findAll() {
    return this.merchantService.findAll();
  }

  @Query(() => Merchant, { name: 'merchant' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.merchantService.findOne(id);
  }

  @Mutation(() => Merchant)
  updateMerchant(@Args('updateMerchantInput') updateMerchantInput: UpdateMerchantInput) {
    return this.merchantService.update(updateMerchantInput.id, updateMerchantInput);
  }

  @Mutation(() => Merchant)
  removeMerchant(@Args('id', { type: () => Int }) id: number) {
    return this.merchantService.remove(id);
  }
}
