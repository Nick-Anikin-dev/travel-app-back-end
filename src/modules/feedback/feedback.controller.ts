import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { User } from "../../common/decotator/user.decorator";
import { AuthUser } from "../../common/types/interfaces/auth-user.interface";
import { FindFeedbacksEntityParamsDto } from "./dto/find-feedbacks-entity-params.dto";
import { FindFeedbacksQuery } from "./dto/find-feedbacks-query";

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {
  }

  @Post()
  async create(@User() user: AuthUser, @Body() dto: CreateFeedbackDto) {
    return await this.feedbackService.create(dto, user);
  }

  @Get(':related_entity_type/:related_entity_id')
  async findAll(
      @User() user: AuthUser,
      @Param() params: FindFeedbacksEntityParamsDto,
      @Query() query: FindFeedbacksQuery
  ) {
    return await this.feedbackService.findAll(user, params, query);
  }

  @Get(':id')
  async findOne(@User() user: AuthUser, @Param('id') id: string) {
    return await this.feedbackService.findOne(+id, user);
  }

  @Patch(':id')
  async update(@User() user: AuthUser, @Param('id') id: string, @Body() dto: UpdateFeedbackDto) {
    return await this.feedbackService.update(+id, dto, user);
  }

  @Delete(':id')
  async remove(@User() user: AuthUser, @Param('id') id: string) {
    return await this.feedbackService.remove(+id, user);
  }
}
