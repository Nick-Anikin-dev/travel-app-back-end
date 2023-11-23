import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Country } from "./entities/country.entity";
import { Repository } from "typeorm";
import axios from "axios";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class CountryService {
  constructor(
      @InjectRepository(Country) private readonly countryRepository: Repository<Country>,
      private readonly configService: ConfigService
  ) {
  }

  async findAll() {
    return await this.countryRepository.find();
  }

  async findOne(id: number) {
    return await this.countryRepository.find({
      where: {id}
    });
  }

  async upload() {
    const {data} = await axios.get(`${this.configService.get('COUNTRIES_API_BASE_URL')}/all`);
    const countries = data.map(country => this.countryRepository.create({name: country.name.common}));
    return await this.countryRepository.save(countries)
  }
}
