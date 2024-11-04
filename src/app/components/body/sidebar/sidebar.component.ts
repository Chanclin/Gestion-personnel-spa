import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarBtnComponent } from '../../../components/ui/sidebar-btn/sidebar-btn.component';
import { AuthService } from '../../../services/auth/auth.service';
import { CustomLienComponent } from '../../ui/custom-lien/custom-lien.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarBtnComponent, CustomLienComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/Connexion']);
  }
  estMenuOuvert = false; // Variable de contrôle pour afficher ou cacher le menu déroulant

  basculerMenu() {
    this.estMenuOuvert = !this.estMenuOuvert; // Basculer l'état d'affichage
  }

  estMenuOuvert1 = false; // Variable de contrôle pour afficher ou cacher le menu déroulant

  basculerMenu1() {
    this.estMenuOuvert1 = !this.estMenuOuvert1; // Basculer l'état d'affichage
  }
}
