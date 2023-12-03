import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { User } from "../../common/decotator/user.decorator";
import { AuthUser } from "../../common/types/interfaces/auth-user.interface";

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {
  }

  @Post()
  async create(@User() user: AuthUser, @Body() dto: CreateFeedbackDto) {
    return await this.feedbackService.create(dto, user);
  }

  @Get()
  async findAll(@User() user: AuthUser) {
    return await this.feedbackService.findAll(user);
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
