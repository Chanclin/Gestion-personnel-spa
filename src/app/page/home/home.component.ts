import { Component } from '@angular/core';
import { ListeEntrepriseComponent } from '../../services/liste-entreprise/liste-entreprise.component';
import { CreateEntrepriseComponent } from '../../create-entreprise/create-entreprise.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DeleteEntrepriseComponent } from '../../delete-entreprise/delete-entreprise.component';
import { ListeDirectionComponent } from '../../components/liste-direction/liste-direction.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListeEntrepriseComponent,CreateEntrepriseComponent,RouterOutlet,RouterLink,RouterLinkActive,FormsModule,DeleteEntrepriseComponent,ListeDirectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Gestion_Entreprise';

  
}
