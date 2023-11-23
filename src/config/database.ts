import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { Country } from "../modules/country/entities/country.entity";


enum Env {
    prod = "production",
    test = "testing",
    dev = "development",
}

function getDatabaseConfig(
    configService: ConfigService,
    entities
): PostgresConnectionOptions {
    const env = configService.get<Env>("NODE_ENV");

    switch (env) {
        case Env.prod:
            return {
                synchronize: true,
                type: configService.get("DB_TYPE"),
                host: configService.get("DB_HOST"),
                username: configService.get("DB_USERNAME"),
                password: configService.get("DB_PASSWORD"),
                database: configService.get("DB_DATABASE"),
                entities,
                migrations: [ __dirname + "/migrations/*.ts" ],
                migrationsTableName: "migrations"
            };
        default:
            return {
                synchronize: true,
                type: configService.get("DB_TYPE"),
                port: configService.get<number>("DB_PORT"),
                host: configService.get("DB_HOST"),
                username: configService.get("DB_USERNAME"),
                password: configService.get("DB_PASSWORD"),
                database: configService.get("DB_DATABASE"),
                entities,
                migrations: [ __dirname + "/migrations/*.ts" ],
                migrationsTableName: "migrations"
            };
    }
}

export const DatabaseModule = TypeOrmModule.forRootAsync({
    imports: [ ConfigModule ],
    inject: [ ConfigService ],
    useFactory: (configService: ConfigService) =>
        getDatabaseConfig(configService, [
            Country
        ])
});
