import { Component } from '@angular/core';
import { SearchbarComponent } from '../../ui/searchbar/searchbar.component';
import { AvatarComponent } from '../../ui/avatar/avatar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchbarComponent, AvatarComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
