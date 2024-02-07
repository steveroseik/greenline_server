import { Module } from '@nestjs/common';
import { RackService } from './rack.service';
import { RackResolver } from './rack.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rack } from './entities/rack.entity';
import { BallotModule } from 'src/ballot/ballot.module';

@Module({
  imports: [TypeOrmModule.forFeature([Rack]), BallotModule],
  providers: [RackResolver, RackService],
  exports: [RackService]
})
export class RackModule {}
