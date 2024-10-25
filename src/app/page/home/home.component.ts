import { Component } from '@angular/core';
import { ListeEntrepriseComponent } from '../../components/liste-entreprise/liste-entreprise.component';
import { CreateEntrepriseComponent } from '../../components/create-entreprise/create-entreprise.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeleteEntrepriseComponent } from '../../components/delete-entreprise/delete-entreprise.component';
import { ListeDirectionComponent } from '../../components/liste-direction/liste-direction.component';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListeEntrepriseComponent, CreateEntrepriseComponent, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, DeleteEntrepriseComponent, ListeDirectionComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Gestion_Entreprise';

  
}
