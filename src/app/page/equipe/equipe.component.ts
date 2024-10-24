import { Component } from '@angular/core';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent {
  // Variable pour suivre l'onglet actif
  activeTab: string = 'frontend';  // L'onglet frontend est actif par défaut

  // Méthode pour changer d'onglet
  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
