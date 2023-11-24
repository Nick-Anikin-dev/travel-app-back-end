import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PlanningService } from './planning.service';
import { CreatePlanningDto } from './dto/create-planning.dto';
import { UpdatePlanningDto } from './dto/update-planning.dto';
import { JwtAuthGuard } from "../../common/guard/jwt-auth.guard";
import { User } from "../../common/decotator/user.decorator";
import { AuthUser } from "../../common/types/interfaces/auth-user.interface";

@UseGuards(JwtAuthGuard)
@Controller('planning')
export class PlanningController {
  constructor(private readonly planningService: PlanningService) {}

  @Post()
  async create(@User() user: AuthUser, @Body() dto: CreatePlanningDto) {
    return await this.planningService.create(dto, user);
  }

  @Get()
  async findAll(@User() user: AuthUser) {
    return await this.planningService.findAll(user);
  }

  @Get(':id')
  async findOne(@User() user: AuthUser, @Param('id') id: string) {
    return await this.planningService.findOne(+id, user);
  }

  @Patch(':id')
  async update(@User() user: AuthUser, @Param('id') id: string, @Body() dto: UpdatePlanningDto) {
    return await this.planningService.update(+id, dto, user);
  }

  @Delete(':id')
  async remove(@User() user: AuthUser, @Param('id') id: string) {
    return await this.planningService.remove(+id, user);
  }
}
