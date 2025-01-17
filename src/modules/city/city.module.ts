import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { City } from "./entities/city.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [ AuthModule, TypeOrmModule.forFeature([ City ]) ],
  controllers: [ CityController ],
  providers: [ CityService ],
  exports: [ CityService ],
})
export class CityModule {}
