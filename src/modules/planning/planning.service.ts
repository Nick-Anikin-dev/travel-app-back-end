import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlanningDto } from './dto/create-planning.dto';
import { UpdatePlanningDto } from './dto/update-planning.dto';
import { AuthUser } from "../../common/types/interfaces/auth-user.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Planning } from "./entities/planning.entity";
import { Repository } from "typeorm";

@Injectable()
export class PlanningService {
  constructor(@InjectRepository(Planning) private readonly planningRepository: Repository<Planning>) {
  }

  async create(dto: CreatePlanningDto, user: AuthUser) {
    const new_planning = this.planningRepository.create({...dto, user_id: user.id});
    return await this.planningRepository.save(new_planning);
  }

  async findAll(user: AuthUser) {
    return await this.planningRepository.find({
      where: {
        user_id: user.id,
      },
      relations: ['country']
    });
  }

  async findOne(id: number, user: AuthUser) {
    return await this.planningRepository.findOne({
      where: {
        id, user_id: user.id
      }
    });
  }

  async update(id: number, dto: UpdatePlanningDto, user: AuthUser) {
    const planning = await this.planningRepository.findOne({
      where: {
        id, user_id: user.id
      }
    })

    if (!planning) {
      throw new NotFoundException()
    }

    return await this.planningRepository.update({
      id
    }, dto);
  }

  async remove(id: number, user: AuthUser) {
    return await this.planningRepository.softDelete({
      id, user_id: user.id,
    });
  }
}
