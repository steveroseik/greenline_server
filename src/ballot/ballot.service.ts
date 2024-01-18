import { Injectable } from '@nestjs/common';
import { CreateBallotInput } from './dto/create-ballot.input';
import { UpdateBallotInput } from './dto/update-ballot.input';

@Injectable()
export class BallotService {
  create(createBallotInput: CreateBallotInput) {
    return 'This action adds a new ballot';
  }

  findAll() {
    return `This action returns all ballot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ballot`;
  }

  update(id: number, updateBallotInput: UpdateBallotInput) {
    return `This action updates a #${id} ballot`;
  }

  remove(id: number) {
    return `This action removes a #${id} ballot`;
  }
}
