import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryController } from './country.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Country } from "./entities/country.entity";
import { City } from "../city/entities/city.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [ AuthModule, TypeOrmModule.forFeature([ Country, City ]) ],
  controllers: [ CountryController ],
  providers: [ CountryService ],
  exports: [ CountryService ]
})
export class CountryModule {}
