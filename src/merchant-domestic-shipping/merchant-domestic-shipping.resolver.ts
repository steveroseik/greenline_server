import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MerchantDomesticShippingService } from './merchant-domestic-shipping.service';
import { MerchantDomesticShipping } from './entities/merchant-domestic-shipping.entity';
import { CreateMerchantDomesticShippingInput } from './dto/create-merchant-domestic-shipping.input';
import { UpdateMerchantDomesticShippingInput } from './dto/update-merchant-domestic-shipping.input';

@Resolver(() => MerchantDomesticShipping)
export class MerchantDomesticShippingResolver {
  constructor(private readonly merchantDomesticShippingService: MerchantDomesticShippingService) {}

  @Mutation(() => MerchantDomesticShipping)
  createMerchantDomesticShipping(@Args('createMerchantDomesticShippingInput') createMerchantDomesticShippingInput: CreateMerchantDomesticShippingInput) {
    return this.merchantDomesticShippingService.create(createMerchantDomesticShippingInput);
  }

  @Query(() => [MerchantDomesticShipping], { name: 'merchantDomesticShipping' })
  findAll() {
    return this.merchantDomesticShippingService.findAll();
  }

  @Query(() => MerchantDomesticShipping, { name: 'merchantDomesticShipping' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.merchantDomesticShippingService.findOne(id);
  }

  @Mutation(() => MerchantDomesticShipping)
  updateMerchantDomesticShipping(@Args('updateMerchantDomesticShippingInput') updateMerchantDomesticShippingInput: UpdateMerchantDomesticShippingInput) {
    return this.merchantDomesticShippingService.update(updateMerchantDomesticShippingInput.id, updateMerchantDomesticShippingInput);
  }

  @Mutation(() => MerchantDomesticShipping)
  removeMerchantDomesticShipping(@Args('id', { type: () => Int }) id: number) {
    return this.merchantDomesticShippingService.remove(id);
  }
}
