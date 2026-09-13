import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('HTTP Request:', req.method, req.url);

  const authReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-token-123'
    }
  });

  return next(authReq);
};