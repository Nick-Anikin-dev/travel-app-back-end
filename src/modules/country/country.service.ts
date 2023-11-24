import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Country } from "./entities/country.entity";
import { Brackets, Repository } from "typeorm";
import axios from "axios";
import { ConfigService } from "@nestjs/config";
import { ICountryData } from "./types/interfaces/country-data.interface";
import { City } from "../city/entities/city.entity";
import { BaseFindQuery } from "../../common/types/base-find-query";

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(Country) private readonly countryRepository: Repository<Country>,
        @InjectRepository(City) private readonly cityRepository: Repository<City>,
        private readonly configService: ConfigService
    ) {
    }

    async findAll(query: BaseFindQuery) {
        const {search, order, order_by, page, per_page} = query;
        return await this.countryRepository.createQueryBuilder('country')
            .select([
                'country.id',
                'country.common_name',
                'country.native_name',
                'country.capital_name',
                'country.flags'
            ])
            .where(!!search && new Brackets(qb =>
                qb.where(`country.common_name ILIKE '%${search}%'`)
                    .orWhere(`country.official_name ILIKE '%${search}%'`)
                    .orWhere(`country.native_name ILIKE '%${search}%'`)
            ))
            .take(per_page || 50)
            .skip(((page || 1) - 1) * (per_page || 50))
            .orderBy(order_by || 'country.common_name', order)
            .getMany()
    }

    async findOne(id: number) {
        return await this.countryRepository.find({
            where: {id}
        });
    }

    async syncCities() {
        const countries = await this.countryRepository.find({
            select: [ 'id', 'common_name', 'capital_name' ]
        });
        const {data} = await axios.get(`${this.configService.get('COUNTIES_CITIES_API_BASE_URL')}`);
        const countries_with_cities = data.data;
        await Promise.all(countries_with_cities.map(async (country_data) => {
            const target_country = countries.find(country => country_data.country === country.common_name);
            if (!target_country) {
                return;
            }
            const cities = country_data.cities.map(city => this.cityRepository.create({
                country_id: target_country.id,
                common_name: city,
            }));
            const saved_cities = await this.cityRepository.save(cities);
            const capital_name = target_country.capital_name && target_country.capital_name[0];
            if (!capital_name) {
                return;
            }
            const target_city = saved_cities.find(city => city.common_name === capital_name);
            if (target_city) {
                await this.countryRepository.update({id: target_country.id}, {
                    capital_id: target_city.id
                })
            }
        }));
    }

    async upload() {
        const {data} = await axios.get<ICountryData[]>(`${this.configService.get('COUNTRIES_API_BASE_URL')}/all`);
        const countries = data.map(country => this.countryRepository.create(
            {
                common_name: country.name.common,
                official_name: country.name.official,
                native_name: country.name?.nativeName ? Object.values(country.name.nativeName)[0]?.common : null,
                tld: country.tld,
                cca2: country.cca2,
                ccn3: country.ccn3,
                cca3: country.cca3,
                cioc: country.cioc,
                status: country.status,
                unMember: country.unMember,
                idd: country.idd,
                independent: country.independent,
                capital_name: country.capital,
                region: country.region,
                subregion: country.subregion,
                translations: country.translations,
                latlng: country.latlng,
                car_signs: country.car.signs,
                car_side: country.car.side,
                land_locked: country.landlocked,
                borders: country.borders,
                area: country.area,
                flags: country.flags,
                flag_string: country.flag,
                population: country.population,
                continents: country.continents,
                timezones: country.timezones,
                start_of_week: country.startOfWeek,
            }
        ));
        return await this.countryRepository.save(countries)
    }
}
