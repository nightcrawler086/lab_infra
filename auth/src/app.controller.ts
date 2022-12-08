import { Controller, Get, Post, Request, Body, Patch, Param, Query, Delete, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';
import { userSignupDTO } from "./dto/userSignup.dto";
import { UpdateUserDTO } from './dto/user-update.dto';

@Controller('api/auth')
export class AppController {
  constructor(private appService: AppService) {}


  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.appService.find(email)
  }

  // request doesn't fail, but doesn't return anything
  @Get('user/:id')
  async findUser(@Param('id') id: string ) {
    const user = await this.appService.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found')
    }
    return user
  }

  @Delete('user/:id') 
  removeUser(@Param('id') userId: string ) {
    return this.appService.remove(userId)
  }

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

  @Patch('/user/:id')
  updateUser(@Param('id') userId: string, @Body() body: UpdateUserDTO) {
    return this.appService.update(userId, body)
  }
}