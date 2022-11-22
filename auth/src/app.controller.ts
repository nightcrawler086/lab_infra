import { Controller, Get, Post, Request, Body, Patch, Param, Query, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { userSignupDTO } from "./dto/userSignup.dto";

@Controller('api/auth')
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // request doesn't fail, but doesn't return anything
  @Get('user/:id')
  findUser(@Param('id') id: string ) {
    return this.appService.findOne(parseInt(id));
  }

  //@Delete('user/:id') 
  //removeUser(@Param('id') id: string ) {
  //  return this.appService.remove(parseInt(id))
  //}

  @Post('signup')
  createUser(@Body() body: userSignupDTO) {
    this.appService.create(body.email, body.password);
  }
  //async userSignup(@Body() body: userSignupDTO) {
  //  let data = body as userSignupDTO;
  //  console.log(`Creating a new user with email ${data.email} and a passowrd of ${data.password}`)
  //  return JSON.stringify(data);
  //  //return this.appService.userSignup();
  //  // new user({ email, password})
  //}

  @Post('signin')
  userSignin(): string {
    return this.appService.userSignin();
  }

  @Post('signout')
  userSignout(): string {
    return this.appService.userSignout();
  }
}