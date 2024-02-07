import { Module } from '@nestjs/common';
import { BoxService } from './box.service';
import { BoxResolver } from './box.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Box } from './entities/box.entity';
import { ItemInBoxModule } from 'src/item-in-box/item-in-box.module';

@Module({
  imports: [TypeOrmModule.forFeature([Box]), ItemInBoxModule],
  providers: [BoxResolver, BoxService],
  exports: [BoxService]
})
export class BoxModule {}
