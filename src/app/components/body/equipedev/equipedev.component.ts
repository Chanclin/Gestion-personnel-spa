import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from '../../ui/profil/profil.component';

@Component({
  selector: 'app-equipedev',
  standalone: true,
  imports: [CommonModule, ProfilComponent],
  templateUrl: './equipedev.component.html',
})
export class EquipedevComponent {
  activerTab: string = 'frontend';

  selectTab(tab: string) {
    this.activerTab = tab;
  }
}
