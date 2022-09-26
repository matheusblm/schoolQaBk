import { Injectable } from '@nestjs/common';
import { AskDto } from './dto/ask.dto';
import { update_ask } from './dto/update_ask.dto';

@Injectable()
export class AskService {
  create(createAskDto: AskDto) {
    return 'This action adds a new ask';
  }

  findAll() {
    return `This action returns all ask`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ask`;
  }

  update(id: number, updateAskDto: update_ask) {
    return `This action updates a #${id} ask`;
  }

  remove(id: number) {
    return `This action removes a #${id} ask`;
  }
}
