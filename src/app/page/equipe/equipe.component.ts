import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from "../../components/profil/profil.component";
import { LienversComponent } from "../../components/lienvers/lienvers.component";

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [CommonModule, ProfilComponent, LienversComponent],
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
