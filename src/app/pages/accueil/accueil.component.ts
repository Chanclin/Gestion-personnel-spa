import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { CreateEntrepriseComponent } from '../../components/create-entreprise/create-entreprise.component';
import { DeleteEntrepriseComponent } from '../../components/delete-entreprise/delete-entreprise.component';
import { ListeDirectionComponent } from '../../components/liste-direction/liste-direction.component';
import { ListeEntrepriseComponent } from '../../components/liste-entreprise/liste-entreprise.component';
import { MainComponent } from '../../components/main/main.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    SidebarComponent,
    NavbarComponent,
    MainComponent,
    RouterOutlet,
    CreateEntrepriseComponent,
    ListeEntrepriseComponent,
    ListeDirectionComponent,
    DeleteEntrepriseComponent,
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {}
