import { Module } from '@nestjs/common';
import { BoxService } from './box.service';
import { BoxResolver } from './box.resolver';

@Module({
  providers: [BoxResolver, BoxService],
})
export class BoxModule {}
