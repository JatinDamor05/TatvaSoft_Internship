import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // TEMPORARY: invalid URL to force an error
  private apiUrl = 'https://jsonplaceholder.typicode.com/invalid-users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error loading users:', error);
        return throwError(() => error);
      })
    );
  }

  createUser(user: any) {
    return this.http.post(this.apiUrl, user);
  }

  updateUser(id: number, user: any) {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}