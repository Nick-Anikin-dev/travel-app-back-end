import { Injectable } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Hotel } from "./entities/hotel.entity";
import { Repository } from "typeorm";

@Injectable()
export class HotelService {
  constructor(@InjectRepository(Hotel) private readonly hotelRepository: Repository<Hotel>) {
  }

  async create(dto: CreateHotelDto) {
    const new_hotel = this.hotelRepository.create(dto);
    return await this.hotelRepository.save(new_hotel);
  }

  async findAll() {
    return await this.hotelRepository.find();
  }

  async findByCityId(city_id: number){
    return await this.hotelRepository.findOne({
      where: {
        city_id,
      }
    })
  }

  async findOne(id: number) {
    return await this.hotelRepository.findOne({where: {id}});
  }

  async update(id: number, dto: UpdateHotelDto) {
    return this.hotelRepository.update({id}, dto);
  }

  async remove(id: number) {
    return await this.hotelRepository.softDelete({id});
  }
}
