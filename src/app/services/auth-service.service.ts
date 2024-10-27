// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Utilisateur } from '../models/utilisateur.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private loginUrl = 'http://localhost:8086/api/connexion';
//   private registerUrl = 'http://localhost:8086/api/inscription'; // Remplacez par l'URL réelle d'inscription

//   constructor(private http: HttpClient) {}

//   login(username: string, password: string): Observable<boolean> {
//     const loginData = { username, password };
//     return this.http.post<any>(this.loginUrl, loginData).pipe(
//       map((response) => {
//         if (response && response.token) {
//           sessionStorage.setItem('authToken', response.token);
//           return true;
//         }
//         return false;
//       })
//     );
//   }

//   register(utilisateur: Utilisateur): Observable<any> {
//     return this.http.post<any>(this.registerUrl, utilisateur);
//   }

//   logout(): void {
//     sessionStorage.removeItem('authToken');
//   }

//   getToken(): string | null {
//     return sessionStorage.getItem('authToken');
//   }
// }

// src/app/services/auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:8086/api/connexion';
  private registerUrl = 'http://localhost:8086/api/inscription';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<{ token: string }>(this.loginUrl, credentials).pipe(
      tap((response) => {
        sessionStorage.setItem('authToken', response.token);
        this.isLoggedInSubject.next(true);
        this.router.navigate(['/home']);
      })
    );
  }

  register(user: {
    nom: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post<{ token: string }>(this.registerUrl, user).pipe(
      tap(() => {
        this.router.navigate(['/login']);
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem('authToken');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  public isLoggedIn(): boolean {
    return !!sessionStorage.getItem('authToken');
  }
}
