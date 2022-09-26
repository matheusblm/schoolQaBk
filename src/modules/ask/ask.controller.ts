import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { AskService } from './ask.service';
import { AskDto } from './dto/ask.dto';
import { update_ask } from './dto/update_ask.dto';

@Controller('ask')
export class AskController {
  constructor(private readonly askService: AskService) {}

  @Post()
  create(@Body() createAskDto: AskDto) {
    return this.askService.create(createAskDto);
  }

  @Get()
  findAll() {
    return this.askService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.askService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAskDto: update_ask) {
    return this.askService.update(+id, updateAskDto);
  }
}
