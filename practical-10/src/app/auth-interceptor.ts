import {
  HttpInterceptorFn,
  HttpErrorResponse
} from '@angular/common/http';

import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, throwError } from 'rxjs';

import { AuthService } from './auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();

  // Attach JWT
  const authReq = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    : req;

  console.log('Interceptor request:', authReq.url);

  // S3 TEST:
  // Simulate a 401 response for this special URL.
  if (authReq.url.includes('/test-401')) {

    console.log('Simulating 401 Unauthorized');

    const error = new HttpErrorResponse({
      error: {
        message: 'Unauthorized'
      },
      status: 401,
      statusText: 'Unauthorized',
      url: authReq.url
    });

    authService.logout();

    router.navigate(['/login']);

    return throwError(() => error);
  }

  // Normal HTTP requests
  return next(authReq).pipe(

    catchError((error: HttpErrorResponse) => {

      if (error.status === 401) {

        console.log('401 Unauthorized received from server');

        authService.logout();

        router.navigate(['/login']);
      }

      return throwError(() => error);
    })

  );
};