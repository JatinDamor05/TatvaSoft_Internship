import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, map, tap, catchError } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.apiUrl).pipe(

      // Retry the request 2 more times if it fails
      retry(2),

      // Transform the response
      map((users) => {
        return users.filter(user => user.id % 2 === 0);
      }),

      // Log successful result
      tap((users) => {
        console.log('Users loaded successfully:', users);
      }),

      // If all retries fail, return an empty array
      catchError((error) => {
        console.error('Failed to load users:', error);

        return of([]);
      })
    );
  }
}