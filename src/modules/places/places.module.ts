import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Place } from "./entities/place.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [ AuthModule, TypeOrmModule.forFeature([ Place ]) ],
  controllers: [ PlacesController ],
  providers: [ PlacesService ],
  exports: [ PlacesService ]
})
export class PlacesModule {}
