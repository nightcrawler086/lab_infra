import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'

  @Injectable()
  export class AppService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  create(email: string, password: string) {
    const user = this.repo.create({ email, password })
    console.log(`Creating user:  email=${email}, password=${password}`)
    return this.repo.save(user)
  }
  getHello(): string {
    return 'Hello';
  }
  getUsers(): string {
    return 'This is where we get our users from';
  }
  userSignin(): string {
    return 'sing in the users here';
  }
  userSignup(): string {
    return 'sing up the users here';
  }
  userSignout(): string {
  return 'Sign out the users here';
  }
}
