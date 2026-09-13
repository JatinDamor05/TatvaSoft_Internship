import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { authGuard } from './auth-guard';
import { AuthService } from './auth';

describe('authGuard', () => {

  it('should be created', () => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        {
          provide: Router,
          useValue: {
            createUrlTree: () => ({})
          }
        }
      ]
    });

    expect(authGuard).toBeTruthy();
  });

});