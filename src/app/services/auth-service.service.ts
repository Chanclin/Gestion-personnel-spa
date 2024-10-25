import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'https://api/connexion'; // URL de votre API Spring Boot

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return this.http.post(this.loginUrl, loginData).pipe(
      map((response: any) => {
        if (response && response.token) {
          // Stocker le jeton JWT localement
          localStorage.setItem('authToken', response.token);
          return true;
        }
        return false;
      })
    );
  }
}
