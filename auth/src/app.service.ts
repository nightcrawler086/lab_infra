import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from minikube!';
  }
  getUsers(): string {
    return 'The users should be here';
  }
  userSignin(): string {
    return 'The users signin be here';
  }
  userSignup(): string {
    return 'The users signup be here';
  }
  userSignout(): string {
    return 'The users signout be here';
  }
}
