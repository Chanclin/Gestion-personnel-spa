import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bouton-retour',
  standalone: true,
  imports: [],
  templateUrl: './bouton-retour.component.html',
})
export class BoutonRetourComponent {
  @Input() titre: string = '';
  @Input() routeUrl: string = '/';

  constructor(private router: Router) {}

  retour() {
    this.router.navigate([this.routeUrl]);
  }
}
