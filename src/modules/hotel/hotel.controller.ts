import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { JwtAuthGuard } from "../../common/guard/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {
  }

  @Post()
  async create(@Body() dto: CreateHotelDto) {
    return await this.hotelService.create(dto);
  }

  @Get()
  async findAll() {
    return await this.hotelService.findAll();
  }

  @Get('/city/:city_id')
  async findByCityId(@Param('city_id') city_id: string) {
    return await this.hotelService.findByCityId(+city_id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.hotelService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateHotelDto) {
    return await this.hotelService.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.hotelService.remove(+id);
  }
}
