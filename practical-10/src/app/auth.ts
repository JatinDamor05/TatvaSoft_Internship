import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | null = null;

  // Simulated JWT received from a server
  private mockJwt =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
  'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImV4cCI6MTg5MzQ1MTIwMH0.' +
  'mock-signature';

  login(username: string, password: string): void {
    console.log('Login attempted:', username);

    // Simulate receiving JWT from server
    this.token = this.mockJwt;

    console.log('JWT received:', this.token);

    // Decode the JWT payload
    const payload = this.decodeJwtPayload(this.token);

    console.log('Decoded payload:', payload);
    console.log('User ID:', payload.sub);
    console.log('Role:', payload.admin ? 'admin' : 'user');
  }

  logout(): void {
    this.token = null;
    console.log('Logged out');
  }

  isLoggedIn(): boolean {
    return this.token !== null;
  }

    getToken(): string | null {
    return this.token;
    }

//   getRole(): 'admin' | 'user' {
//     if (!this.token) {
//       return 'user';
//     }

//     const payload = this.decodeJwtPayload(this.token);

//     return payload.admin ? 'admin' : 'user';
//   }

    getRole(): 'admin' | 'user' {
    return 'user';
    }

  getUserId(): string | null {
    if (!this.token) {
      return null;
    }

    const payload = this.decodeJwtPayload(this.token);

    return payload.sub;
  }

  private decodeJwtPayload(token: string): any {

    // JWT format:
    // header.payload.signature

    const parts = token.split('.');

    // Payload is the second part
    const payloadBase64 = parts[1];

    // Decode Base64
    const payloadJson = atob(payloadBase64);

    // Convert JSON text into an object
    return JSON.parse(payloadJson);
  }

    isTokenExpired(): boolean {
    if (!this.token) {
        return true;
    }

    const payload = this.decodeJwtPayload(this.token);

    if (!payload.exp) {
        return true;
    }

    const currentTime = Math.floor(Date.now() / 1000);

    return payload.exp < currentTime;
    }  

}