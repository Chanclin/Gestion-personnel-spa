import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !!this.authService.getToken();

    if (!isAuthenticated) {
      this.router.navigate(['/Connexion']);
    }

    return isAuthenticated;
  }
}