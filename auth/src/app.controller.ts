import { Controller, Get, Post, Request, Body } from '@nestjs/common';
import { request } from 'express';
import { AppService } from './app.service';
import { userSignupDTO } from "./dto/userSignup.dto";

@Controller('api/auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('currentuser')
  getUsers(): string {
    return this.appService.getUsers();
  }

  @Post('signup')
  async userSignup(@Body() body: userSignupDTO) {
    let data = body as userSignupDTO;
    console.log(`Creating a new user with email ${data.email} and a passowrd of ${data.password}`)
    return JSON.stringify(data);
    //return this.appService.userSignup();
    // new user({ email, password})
  }

  @Post('signin')
  userSignin(): string {
    return this.appService.userSignin();
  }

  @Post('signout')
  userSignout(): string {
    return this.appService.userSignout();
  }
}