import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { MainComponent } from '../../components/body/main/main.component';
import { NavbarComponent } from '../../components/body/navbar/navbar.component';
import { SidebarComponent } from '../../components/body/sidebar/sidebar.component';
import { ListeDirectionsComponent } from '../../components/direction/liste-directions/liste-directions.component';
import { FormEntrepriseComponent } from '../../components/entreprise/form-entreprise/form-entreprise.component';
import { ListeEntreprisesComponent } from '../../components/entreprise/liste-entreprises/liste-entreprises.component';
import { FooterComponent } from '../../components/body/footer/footer.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    SidebarComponent,
    NavbarComponent,
    MainComponent,
    RouterOutlet,
    FormEntrepriseComponent,
    ListeEntreprisesComponent,
    ListeDirectionsComponent,
    FooterComponent,
  ],
  templateUrl: './accueil.component.html',
})
export class AccueilComponent {}
