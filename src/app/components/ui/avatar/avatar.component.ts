import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';


@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
})
export class AvatarComponent implements OnInit {
  userName: string = '';
  userInitial: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      if (user && typeof user.nom === 'string') {
        this.userName = user.nom; // Récupérer le username
        this.userInitial = this.userName.charAt(0).toUpperCase(); // Initiale
      } else if (typeof user === 'string') {
        // Cas où `user` est une chaîne
        this.userName = user;
        this.userInitial = this.userName.charAt(0).toUpperCase();
      } else {
        // Si aucun utilisateur n'est connecté
        this.userName = 'Utilisateur';
        this.userInitial = 'U';
      }
    });
  }  
}

