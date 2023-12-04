import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { AuthUser } from "../../common/types/interfaces/auth-user.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Feedback } from "./entities/feedback.entity";
import { Repository } from "typeorm";
import { FindFeedbacksEntityParamsDto } from "./dto/find-feedbacks-entity-params.dto";
import { FindFeedbacksQuery } from "./dto/find-feedbacks-query";

@Injectable()
export class FeedbackService {
  constructor(@InjectRepository(Feedback) private readonly feedbackRepository: Repository<Feedback>) {
  }

  async create(dto: CreateFeedbackDto, user: AuthUser) {
    const new_feedback = this.feedbackRepository.create({...dto, user_id: user.id});
    return await this.feedbackRepository.save(new_feedback);
  }

  async findAll(user: AuthUser, params: FindFeedbacksEntityParamsDto, query: FindFeedbacksQuery) {
    const {order_by, order} = query;
    const {related_entity_id, related_entity_type} = params;
    return await this.feedbackRepository.find({
      where: {
        related_entity_id,
        related_entity_type,
      },
      order: {
        [order_by]: order,
      },
      relations: ['user']
    });
  }

  async findOne(id: number, user: AuthUser) {
    return await this.feedbackRepository.findOne({
      where: {
        id
      },
      relations: ['user']
    });
  }

  async update(id: number, dto: UpdateFeedbackDto, user: AuthUser) {
    const feedback = await this.feedbackRepository.findOne({
      where: {
        id, user_id: user.id
      }
    })

    if (!feedback) {
      throw new NotFoundException()
    }

    return await this.feedbackRepository.update({id}, dto);
  }

  async remove(id: number, user: AuthUser) {
    return await this.feedbackRepository.softDelete({
      id, user_id: user.id
    });
  }
}
