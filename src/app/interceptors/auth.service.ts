// src/app/interceptors/auth.interceptor.ts
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = sessionStorage.getItem('authToken'); // Récupère le token JWT depuis le sessionStorage

    // Si le token existe, on clone la requête pour ajouter le header Authorization
    if (authToken) {
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`),
      });
      return next.handle(clonedReq); // Passe la requête clonée avec le token
    }
    return next.handle(req); // Passe la requête d'origine sans modification
  }
}
