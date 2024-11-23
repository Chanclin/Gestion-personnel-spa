import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Utilisateur } from '../../models/utilisateur.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private loginUrl = `${this.apiUrl}/api/utilisateur/connexion`;
  private registerUrl = `${this.apiUrl}/api/utilisateur/inscription`;

  private currentUserSubject: BehaviorSubject<Utilisateur | null> = new BehaviorSubject<Utilisateur | null>(null);
  public currentUser: Observable<Utilisateur | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  inscription(utilisateur: Utilisateur): Observable<boolean> {
    return this.http.post<any>(this.registerUrl, utilisateur).pipe(
      map((response) => {
        if (response && response.success) {
          this.router.navigate(['/connexion']);
          return true;
        }
        return false;
      }),
      catchError((error) => {
        console.error('Erreur lors de l\'inscription :', error);
        return of(false); // Retourner false en cas d'erreur
      })
    );
  }

  connexion(username: string, password: string): Observable<boolean> {
    const loginData = { username, password };
    return this.http.post<any>(this.loginUrl, loginData).pipe(
      map((response) => {
        if (response && response.token) {
          sessionStorage.setItem('authToken', response.token);
  
          // Stocker le username comme une chaîne
          const user = response.user; // Ici, `user` est une chaîne, pas un objet
          if (user) {
            sessionStorage.setItem('userName', user); // Stocker le username
            this.currentUserSubject.next({ nom: user } as any); // Adaptez `currentUser` pour qu'il accepte une chaîne
          }
  
          return true;
        }
        return false;
      }),
      catchError((error) => {
        console.error('Erreur de connexion :', error);
        return of(false);
      })
    );
  }
  
  
  logout(): void {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userName');
    this.currentUserSubject.next(null);  // Mettre à jour le currentUserSubject à null lors de la déconnexion
  }

  getCurrentUser(): Observable<Utilisateur | null> {
    return this.currentUser;  // Retourner un observable du currentUser
  }

  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }
}
