import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MerchantCustomerAddressService } from './merchant-customer-address.service';
import { MerchantCustomerAddress } from './entities/merchant-customer-address.entity';
import { CreateMerchantCustomerAddressInput } from './dto/create-merchant-customer-address.input';
import { UpdateMerchantCustomerAddressInput } from './dto/update-merchant-customer-address.input';

@Resolver(() => MerchantCustomerAddress)
export class MerchantCustomerAddressResolver {
  constructor(private readonly merchantCustomerAddressService: MerchantCustomerAddressService) {}

  @Mutation(() => MerchantCustomerAddress)
  createMerchantCustomerAddress(@Args('createMerchantCustomerAddressInput') createMerchantCustomerAddressInput: CreateMerchantCustomerAddressInput) {
    return this.merchantCustomerAddressService.create(createMerchantCustomerAddressInput);
  }

  @Query(() => [MerchantCustomerAddress], { name: 'merchantCustomerAddress' })
  findAll() {
    return this.merchantCustomerAddressService.findAll();
  }

  @Query(() => MerchantCustomerAddress, { name: 'merchantCustomerAddress' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.merchantCustomerAddressService.findOne(id);
  }

  @Mutation(() => MerchantCustomerAddress)
  updateMerchantCustomerAddress(@Args('updateMerchantCustomerAddressInput') updateMerchantCustomerAddressInput: UpdateMerchantCustomerAddressInput) {
    return this.merchantCustomerAddressService.update(updateMerchantCustomerAddressInput.id, updateMerchantCustomerAddressInput);
  }

  @Mutation(() => MerchantCustomerAddress)
  removeMerchantCustomerAddress(@Args('id', { type: () => Int }) id: number) {
    return this.merchantCustomerAddressService.remove(id);
  }
}
