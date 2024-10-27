import { CommonModule } from '@angular/common'; // Ajoutez ceci
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { CreateEntrepriseComponent } from '../../components/create-entreprise/create-entreprise.component';
import { DeleteEntrepriseComponent } from '../../components/delete-entreprise/delete-entreprise.component';
import { ListeDirectionComponent } from '../../components/liste-direction/liste-direction.component';
import { ListeEntrepriseComponent } from '../../components/liste-entreprise/liste-entreprise.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MainHomeComponent } from '../../components/main-home/main-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ListeEntrepriseComponent,
    CreateEntrepriseComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    DeleteEntrepriseComponent,
    ListeDirectionComponent,
    ButtonComponent,
    SidebarComponent,
    NavbarComponent,
    CommonModule,
    MainHomeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isSidebarVisible = false;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
