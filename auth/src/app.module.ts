import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigService } from './db/mongo-config';
import { User } from './entities/user.entity'
//import { MongooseModule } from '@nestjs/mongoose';
//import { mongo } from 'mongoose';

@Module({
  // This creates the connection to the DB
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    TypeOrmModule.forFeature([User])
    // Below works, but not async
    //TypeOrmModule.forRoot({
    //type: 'mongodb',
    //host: 'auth-mongo-srv',
    //port: 27017,
    //database: 'auth',
    //entities: [User],
    //synchronize: true,
    //useUnifiedTopology: true
  //}),
    // This seems to create the repo in mongodb
    // Following two use MongooseModule instead of TypeORM
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
