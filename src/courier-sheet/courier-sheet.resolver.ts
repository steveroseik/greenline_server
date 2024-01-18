import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CourierSheetService } from './courier-sheet.service';
import { CourierSheet } from './entities/courier-sheet.entity';
import { CreateCourierSheetInput } from './dto/create-courier-sheet.input';
import { UpdateCourierSheetInput } from './dto/update-courier-sheet.input';

@Resolver(() => CourierSheet)
export class CourierSheetResolver {
  constructor(private readonly courierSheetService: CourierSheetService) {}

  @Mutation(() => CourierSheet)
  createCourierSheet(@Args('createCourierSheetInput') createCourierSheetInput: CreateCourierSheetInput) {
    return this.courierSheetService.create(createCourierSheetInput);
  }

  @Query(() => [CourierSheet], { name: 'courierSheet' })
  findAll() {
    return this.courierSheetService.findAll();
  }

  @Query(() => CourierSheet, { name: 'courierSheet' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.courierSheetService.findOne(id);
  }

  @Mutation(() => CourierSheet)
  updateCourierSheet(@Args('updateCourierSheetInput') updateCourierSheetInput: UpdateCourierSheetInput) {
    return this.courierSheetService.update(updateCourierSheetInput.id, updateCourierSheetInput);
  }

  @Mutation(() => CourierSheet)
  removeCourierSheet(@Args('id', { type: () => Int }) id: number) {
    return this.courierSheetService.remove(id);
  }
}
