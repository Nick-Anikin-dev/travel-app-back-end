import { Module } from '@nestjs/common';
import { PlanningService } from './planning.service';
import { PlanningController } from './planning.controller';
import { AuthModule } from "../auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Planning } from "./entities/planning.entity";

@Module({
  imports: [ AuthModule, TypeOrmModule.forFeature([ Planning ]) ],
  controllers: [ PlanningController ],
  providers: [ PlanningService ],
  exports: [ PlanningService ]
})
export class PlanningModule {}
