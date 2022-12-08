import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { v4 as uuidv4 } from 'uuid';
import { User } from './entities/user.entity'

  @Injectable()
  export class AppService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  create(email: string, password: string) {
    const userId = uuidv4()
    // The 'instance' of the user needs to be created first before
    // saving off to the DB.  There are hooks attached to the entity
    // that will not run if the entity is not created first
    const user = this.repo.create({ email, password, userId })
    // Using AfterInsert() in Entity class
    //console.log(`Creating user:  email=${email}, password=${password}`)
    return this.repo.save(user)
  }
  findOne(id: string) {
    return this.repo.findOne({
      where: {
        userId: id
      }
     });
  }
  find(email: string) {
      return this.repo.find({ where: { email } })
  }
  async update(userId: string, attrs: Partial<User>) {
    const user = await this.findOne(userId);
    if (!user) {
      throw new NotFoundException('user does not exist');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }
  async remove(userId: string) {
    const user = await this.repo.findOne({
      where: {
        userId: userId
      }
    })
    if (!user) {
      throw new NotFoundException('User with that email address not found.')
    }
    return this.repo.remove(user)
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
