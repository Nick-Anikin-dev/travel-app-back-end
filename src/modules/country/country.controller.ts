import { Controller, Get, Param, Put, Query } from '@nestjs/common';
import { CountryService } from './country.service';
import { BaseFindQuery } from "../../common/types/base-find-query";

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {
  }

  @Get()
  async findAll(@Query() query: BaseFindQuery) {
    return await this.countryService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.countryService.findOne(+id);
  }

  @Get('upload')
  async upload() {
    return await this.countryService.upload();
  }

  @Put('cities/sync')
  async syncCities() {
    return await this.countryService.syncCities();
  }
}
