import { Injectable } from "@nestjs/common";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";
import { User } from '../entities/user.entity'

Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
    createMongooseOptions(): MongooseModuleOptions {
        return {
            host: 'auth-mongo-srv',
            port: 27017,
            database: 'auth',
            entities: [User],
            synchronize: true,
            useUnifiedTopology: true
        }
    }
}