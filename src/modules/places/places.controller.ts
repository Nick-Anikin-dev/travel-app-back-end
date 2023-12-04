import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Controller('place')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {
  }

  @Post()
  async create(@Body() createPlaceDto: CreatePlaceDto) {
    return await this.placesService.create(createPlaceDto);
  }

  @Get()
  async findAll() {
    return await this.placesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.placesService.findOne(+id);
  }

  @Get('/city/:city_id')
  async findByCityId(@Param('city_id') city_id: string){
    return await this.placesService.findByCityId(+city_id);
  }

  @Get('/country/:country_id')
  async findByCountryId(@Param('country_id') country_id: string){
    return await this.placesService.findByCountryId(+country_id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
    return await this.placesService.update(+id, updatePlaceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.placesService.remove(+id);
  }
}
