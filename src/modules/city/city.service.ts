import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { City } from "./entities/city.entity";
import { Brackets, Repository } from "typeorm";
import { BaseFindQuery } from "../../common/types/base-find-query";

@Injectable()
export class CityService {
    constructor(@InjectRepository(City) private readonly cityRepository: Repository<City>) {
    }

    async findAll(query: BaseFindQuery) {
        const {search, order, order_by, page, per_page} = query;
        const take = per_page || 50;
        return await this.cityRepository.createQueryBuilder('city')
            .select([
                'city.id as id',
                'city.common_name as common_name',
                'country.common_name as country',
                'country.flags as flags'
            ])
            .leftJoin('city.country', 'country', '')
            .where(!!search && new Brackets(qb =>
                qb.where(`city.common_name ILIKE '%${search}%'`)
                    .orWhere(`country.common_name ILIKE '%${search}%'`)
                    .orWhere(`country.official_name ILIKE '%${search}%'`)
                    .orWhere(`country.native_name ILIKE '%${search}%'`)
            ))
            .take(take)
            .skip(((page || 1) - 1) * take)
            .orderBy(order_by || 'city.common_name', order)
            .getRawMany()
    }

    findOne(id: number) {
        return this.cityRepository.findOne({
            where: {
                id
            },
            relations: ['country', '']
        });
    }
}
