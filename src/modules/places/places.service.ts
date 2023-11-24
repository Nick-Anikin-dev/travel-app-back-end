import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Place } from "./entities/place.entity";
import { Repository } from "typeorm";

@Injectable()
export class PlacesService {
  constructor(@InjectRepository(Place) private readonly placeRepository: Repository<Place>) {
  }

  async create(dto: CreatePlaceDto) {
    const new_place = this.placeRepository.create(dto);
    return await this.placeRepository.save(new_place);
  }

  async findAll() {
    return await this.placeRepository.find();
  }

  async findOne(id: number) {
    return await this.placeRepository.findOne({
      where: {
        id
      }
    });
  }

  async update(id: number, dto: UpdatePlaceDto) {
    return await this.placeRepository.update({
      id
    }, dto);
  }

  async remove(id: number) {
    return await this.placeRepository.softDelete({
      id
    });
  }
}
