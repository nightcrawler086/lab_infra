import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'

  @Injectable()
  export class AppService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
  create(email: string, password: string) {
    // The 'instance' of the user needs to be created first before
    // saving off to the DB.  There are hooks attached to the entity
    // that will not run if the entity is not created first
    const user = this.repo.create({ email, password })
    // Using AfterInsert() in Entity class
    //console.log(`Creating user:  email=${email}, password=${password}`)
    return this.repo.save(user)
  }
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }
  find(email: string) {
      return this.repo.find({ where: { email } })
  }
  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('user does not exist');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }
  //async remove(id: number) {
  //  const user = await this.repo.findOne(parseInt(id))
  //  return this.repo.remove(user)
  //}
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
