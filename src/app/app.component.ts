import { Component } from '@angular/core';
import { ListeDirectionComponent } from './components/liste-direction/liste-direction.component';
import { CreateEntrepriseComponent } from './create-entreprise/create-entreprise.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ListeEntrepriseComponent } from './services/liste-entreprise/liste-entreprise.component';
import { FormsModule, NgModel } from '@angular/forms';
import { DetailEntrepriseComponent } from './detail-entreprise/detail-entreprise.component';
import { DeleteEntrepriseComponent } from './delete-entreprise/delete-entreprise.component';
import { DirectionService } from './services/direction.service';




ListeEntrepriseComponent
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListeEntrepriseComponent,CreateEntrepriseComponent,RouterOutlet,RouterLink,RouterLinkActive,FormsModule,DeleteEntrepriseComponent,ListeDirectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
