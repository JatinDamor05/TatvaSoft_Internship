import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  serviceId = 'AUTH-SERVICE-001';

  login(): string {
    return 'User logged in';
  }

  logout(): string {
    return 'User logged out';
  }
}