import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BallotService } from './ballot.service';
import { Ballot } from './entities/ballot.entity';
import { CreateBallotInput } from './dto/create-ballot.input';
import { UpdateBallotInput } from './dto/update-ballot.input';

@Resolver(() => Ballot)
export class BallotResolver {
  constructor(private readonly ballotService: BallotService) {}

  @Mutation(() => Ballot)
  createBallot(@Args('createBallotInput') createBallotInput: CreateBallotInput) {
    return this.ballotService.create(createBallotInput);
  }

  @Query(() => Ballot, { name: 'ballot' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ballotService.findOne(id);
  }

  @Mutation(() => Ballot)
  updateBallot(@Args('updateBallotInput') updateBallotInput: UpdateBallotInput) {
    return this.ballotService.update(updateBallotInput.id, updateBallotInput);
  }

  @Mutation(() => Ballot)
  removeBallot(@Args('id', { type: () => Int }) id: number) {
    return this.ballotService.remove(id);
  }
}
