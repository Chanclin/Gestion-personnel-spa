import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LienversComponent } from '../../components/lienvers/lienvers.component';
import { ProfilComponent } from '../../components/profil/profil.component';

import { FooterComponent } from '../../components/footer/footer.component';
import { SubcriberComponent } from '../../components/subcriber/subcriber.component';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-bienvenue',
  standalone: true,
  imports: [
    CommonModule,
    ProfilComponent,
    LienversComponent,
    FooterComponent,
    SubcriberComponent,
    HeroComponent,
  ],
  templateUrl: './bienvenue.component.html',
  styleUrl: './bienvenue.component.css',
})
export class BienvenueComponent {
  logout() {
    throw new Error('Method not implemented.');
  }

  // Variable pour suivre l'onglet actif
  activerTab: string = 'frontend'; // L'onglet frontend est actif par défaut

  // Méthode pour changer d'onglet
  selectTab(tab: string) {
    this.activerTab = tab;
  }
}
