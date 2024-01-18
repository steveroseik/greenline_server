import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SheetOrderService } from './sheet-order.service';
import { SheetOrder } from './entities/sheet-order.entity';
import { CreateSheetOrderInput } from './dto/create-sheet-order.input';
import { UpdateSheetOrderInput } from './dto/update-sheet-order.input';

@Resolver(() => SheetOrder)
export class SheetOrderResolver {
  constructor(private readonly sheetOrderService: SheetOrderService) {}

  @Mutation(() => SheetOrder)
  createSheetOrder(@Args('createSheetOrderInput') createSheetOrderInput: CreateSheetOrderInput) {
    return this.sheetOrderService.create(createSheetOrderInput);
  }

  @Query(() => [SheetOrder], { name: 'sheetOrder' })
  findAll() {
    return this.sheetOrderService.findAll();
  }

  @Query(() => SheetOrder, { name: 'sheetOrder' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sheetOrderService.findOne(id);
  }

  @Mutation(() => SheetOrder)
  updateSheetOrder(@Args('updateSheetOrderInput') updateSheetOrderInput: UpdateSheetOrderInput) {
    return this.sheetOrderService.update(updateSheetOrderInput.id, updateSheetOrderInput);
  }

  @Mutation(() => SheetOrder)
  removeSheetOrder(@Args('id', { type: () => Int }) id: number) {
    return this.sheetOrderService.remove(id);
  }
}
