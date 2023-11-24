import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { AuthModule } from "../auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Hotel } from "./entities/hotel.entity";

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Hotel])],
  controllers: [HotelController],
  providers: [HotelService]
})
export class HotelModule {}
