import { Module } from '@nestjs/common';
import { BallotService } from './ballot.service';
import { BallotResolver } from './ballot.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ballot } from './entities/ballot.entity';
import { ItemModule } from 'src/item/item.module';
import { BoxModule } from 'src/box/box.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ballot]), ItemModule, BoxModule],
  providers: [BallotResolver, BallotService],
  exports: [BallotService]
})
export class BallotModule {}
