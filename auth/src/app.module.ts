import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity'
//import { MongooseModule } from '@nestjs/mongoose';
//import { mongo } from 'mongoose';

@Module({
  // Using TypeORM for the DB connection
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'auth-mongo-srv',
    port: 27017,
    database: 'auth',
    entities: [User],
    synchronize: true,
    useUnifiedTopology: true
  })
    // Using one for testing and one for our users
    //MongooseModule.forRootAsync({
    //  useFactory: async () => ({
    //    uri: 'mongodb://auth-mongo-srv:27017/test',
    //    connectionName: 'test'
    //  }),
    //}),
    // Async??
    //MongooseModule.forRootAsync({
    //  useFactory: async () => ({
    //    uri: 'mongodb://auth-mongo-srv:27017/users',
    //    connectionName: 'users'
    //  }),
    //})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
