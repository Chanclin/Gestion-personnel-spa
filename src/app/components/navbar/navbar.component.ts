import { Component, EventEmitter, Output } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchbarComponent, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
