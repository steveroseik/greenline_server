import { Module } from '@nestjs/common';
import { BallotService } from './ballot.service';
import { BallotResolver } from './ballot.resolver';

@Module({
  providers: [BallotResolver, BallotService],
})
export class BallotModule {}
