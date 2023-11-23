import { Module } from '@nestjs/common';
import { DatabaseModule } from "./config/database";
import { AuthModule } from './modules/auth/auth.module';
import { CountryModule } from './modules/country/country.module';
import { UserModule } from './modules/user/user.module';
import { PlacesModule } from './modules/places/places.module';
import { TicketModule } from './modules/ticket/ticket.module';
import { PlanningModule } from './modules/planning/planning.module';
import { ConfigModule } from "@nestjs/config";
import { CityModule } from './modules/city/city.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule,
    AuthModule,
    CountryModule,
    UserModule,
    PlacesModule,
    TicketModule,
    PlanningModule,
    CityModule
  ],
})
export class AppModule {
}
