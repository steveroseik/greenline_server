import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SheetOrderStatusHistoryService } from './sheet-order-status-history.service';
import { SheetOrderStatusHistory } from './entities/sheet-order-status-history.entity';
import { CreateSheetOrderStatusHistoryInput } from './dto/create-sheet-order-status-history.input';
import { UpdateSheetOrderStatusHistoryInput } from './dto/update-sheet-order-status-history.input';

@Resolver(() => SheetOrderStatusHistory)
export class SheetOrderStatusHistoryResolver {
  constructor(private readonly sheetOrderStatusHistoryService: SheetOrderStatusHistoryService) {}

  @Mutation(() => SheetOrderStatusHistory)
  createSheetOrderStatusHistory(@Args('createSheetOrderStatusHistoryInput') createSheetOrderStatusHistoryInput: CreateSheetOrderStatusHistoryInput) {
    return this.sheetOrderStatusHistoryService.create(createSheetOrderStatusHistoryInput);
  }

  @Query(() => [SheetOrderStatusHistory], { name: 'sheetOrderStatusHistory' })
  findAll() {
    return this.sheetOrderStatusHistoryService.findAll();
  }

  @Query(() => SheetOrderStatusHistory, { name: 'sheetOrderStatusHistory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sheetOrderStatusHistoryService.findOne(id);
  }

  @Mutation(() => SheetOrderStatusHistory)
  updateSheetOrderStatusHistory(@Args('updateSheetOrderStatusHistoryInput') updateSheetOrderStatusHistoryInput: UpdateSheetOrderStatusHistoryInput) {
    return this.sheetOrderStatusHistoryService.update(updateSheetOrderStatusHistoryInput.id, updateSheetOrderStatusHistoryInput);
  }

  @Mutation(() => SheetOrderStatusHistory)
  removeSheetOrderStatusHistory(@Args('id', { type: () => Int }) id: number) {
    return this.sheetOrderStatusHistoryService.remove(id);
  }
}
