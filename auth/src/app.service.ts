import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello from minikube!';
  }
  getUsers(): string {
    return 'The users should be here';
  }
}
