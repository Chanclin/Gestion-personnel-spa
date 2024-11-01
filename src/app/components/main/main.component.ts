import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListeEntrepriseComponent } from '../liste-entreprise/liste-entreprise.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavbarComponent, ListeEntrepriseComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
