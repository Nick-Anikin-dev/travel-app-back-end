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
import { HotelModule } from './modules/hotel/hotel.module';
import { FeedbackModule } from './modules/feedback/feedback.module';

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
    CityModule,
    HotelModule,
    FeedbackModule
  ],
})
export class AppModule {}
