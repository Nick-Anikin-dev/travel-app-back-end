import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelService {
  async create(createHotelDto: CreateHotelDto) {
    return 'This action adds a new hotel';
  }

  async findAll() {
    return `This action returns all hotel`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} hotel`;
  }

  async update(id: number, updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel`;
  }

  async remove(id: number) {
    return `This action removes a #${id} hotel`;
  }
}
