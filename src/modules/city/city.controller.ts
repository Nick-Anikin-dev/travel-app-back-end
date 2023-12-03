import { Controller, Get, Param, Query } from '@nestjs/common';
import { CityService } from './city.service';
import { BaseFindQuery } from "../../common/types/base-find-query";

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {
  }

  @Get()
  findAll(@Query() query: BaseFindQuery) {
    return this.cityService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cityService.findOne(+id);
  }
}
