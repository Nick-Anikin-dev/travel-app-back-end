import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { AuthModule } from "../auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Feedback } from "./entities/feedback.entity";

@Module({
  imports: [ AuthModule, TypeOrmModule.forFeature([ Feedback ]) ],
  controllers: [ FeedbackController ],
  providers: [ FeedbackService ],
  exports: [ FeedbackService ]
})
export class FeedbackModule {
}
