import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../components/body/footer/footer.component';
import { HeroComponent } from '../../components/body/hero/hero.component';
import { SubcriberComponent } from '../../components/body/subcriber/subcriber.component';
import { ProfilComponent } from '../../components/ui/profil/profil.component';
import { EquipedevComponent } from "../../components/body/equipedev/equipedev.component";

@Component({
  selector: 'app-bienvenue',
  standalone: true,
  imports: [
    CommonModule,
    ProfilComponent,
    FooterComponent,
    SubcriberComponent,
    HeroComponent,
    EquipedevComponent
],
  templateUrl: './bienvenue.component.html',
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
