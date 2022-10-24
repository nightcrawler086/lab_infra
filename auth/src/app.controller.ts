import { Controller, Get, Post, Request, Body } from '@nestjs/common';
import { request } from 'express';
import { AppService } from './app.service';
import { userSignupDTO } from "./dto/userSignup.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/users/currentuser')
  getUsers(): string {
    return this.appService.getUsers();
  }

  @Post('/api/users/signup')
  userSignup(@Body() body: userSignupDTO) {
    let data = body as userSignupDTO;
    return JSON.stringify(data);
    //return this.appService.userSignup();
    // new user({ email, password})
  }

  @Post('/api/users/signin')
  userSignin(): string {
    return this.appService.userSignin();
  }

  @Post('/api/users/signout')
  userSignout(): string {
    return this.appService.userSignout();
  }
}