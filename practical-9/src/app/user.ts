import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private cachedUsers: User[] | null = null;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {

    // Return cached data if it already exists
    if (this.cachedUsers !== null) {
      console.log('Returning users from cache');
      return of(this.cachedUsers);
    }

    // First call - fetch from API
    console.log('API CALL: Fetching users from server');

    return this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        tap(users => {
          console.log('API SUCCESS: Caching users');
          this.cachedUsers = users;
        })
      );
  }
}