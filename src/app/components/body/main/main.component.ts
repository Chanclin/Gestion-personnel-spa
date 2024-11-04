import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeEntreprisesComponent } from '../../entreprise/liste-entreprises/liste-entreprises.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, ListeEntreprisesComponent, RouterOutlet],
  templateUrl: './main.component.html',
})
export class MainComponent {}
