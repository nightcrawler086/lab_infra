import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { User } from '../entities/user.entity'

Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    createTypeOrmOptions(connectionName: 'mongo'): TypeOrmModuleOptions {
        return {
            type: 'mongodb',
            host: 'auth-mongo-srv',
            port: 27017,
            database: 'auth',
            entities: [User],
            synchronize: true,
            useUnifiedTopology: true
        }
    }
}