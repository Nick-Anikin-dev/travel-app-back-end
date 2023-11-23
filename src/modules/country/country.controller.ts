import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {
  }

  @Get('upload')
  async upload() {
    return await this.countryService.upload();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.countryService.findOne(+id);
  }

  @Get()
  async findAll() {
    return await this.countryService.findAll();
  }
}
