import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchbarComponent, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
