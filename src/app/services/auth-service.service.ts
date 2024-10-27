import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utilisateur } from '../models/utilisateur.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:8086/api/connexion';
  private registerUrl = 'http://localhost:8086/api/inscription';

  constructor(private http: HttpClient) {}

  register(utilisateur: Utilisateur): Observable<any> {
    const { id_utilisateur, ...data } = utilisateur; // Ignore id_utilisateur
    return this.http.post(this.registerUrl, data); // Envoie les autres propriétés
  }

  login(username: string, password: string): Observable<boolean> {
    const loginData = { username, password };
    return this.http.post<any>(this.loginUrl, loginData).pipe(
      map((response) => {
        if (response && response.token) {
          sessionStorage.setItem('authToken', response.token); // Stocker dans sessionStorage
          return true;
        }
        return false;
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem('authToken'); // Supprimer le token lors de la déconnexion
  }

  getToken(): string | null {
    return sessionStorage.getItem('authToken'); // Récupérer le token depuis sessionStorage
  }
}
