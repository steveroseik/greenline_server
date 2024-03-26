import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MerchantCustomerService } from './merchant-customer.service';
import { MerchantCustomer } from './entities/merchant-customer.entity';
import { CreateMerchantCustomerInput } from './dto/create-merchant-customer.input';
import { UpdateMerchantCustomerInput } from './dto/update-merchant-customer.input';

@Resolver(() => MerchantCustomer)
export class MerchantCustomerResolver {
  constructor(private readonly merchantCustomerService: MerchantCustomerService) {}

  @Mutation(() => MerchantCustomer)
  createMerchantCustomer(@Args('createMerchantCustomerInput') createMerchantCustomerInput: CreateMerchantCustomerInput) {
    return this.merchantCustomerService.create(createMerchantCustomerInput);
  }

  @Query(() => [MerchantCustomer], { name: 'merchantCustomer' })
  findAll() {
    return this.merchantCustomerService.findAll();
  }

  @Query(() => MerchantCustomer, { name: 'merchantCustomer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.merchantCustomerService.findOne(id);
  }

  @Mutation(() => MerchantCustomer)
  updateMerchantCustomer(@Args('updateMerchantCustomerInput') updateMerchantCustomerInput: UpdateMerchantCustomerInput) {
    return this.merchantCustomerService.update(updateMerchantCustomerInput.id, updateMerchantCustomerInput);
  }

  @Mutation(() => MerchantCustomer)
  removeMerchantCustomer(@Args('id', { type: () => Int }) id: number) {
    return this.merchantCustomerService.remove(id);
  }
}
