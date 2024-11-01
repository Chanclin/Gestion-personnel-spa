import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entreprise } from '../../models/entreprise';
import { EntrepriseService } from '../../service/entreprise.service';
import { ListeDirectionComponent } from '../liste-direction/liste-direction.component';
import { LienversComponent } from '../lienvers/lienvers.component';

@Component({
  selector: 'app-detail-entreprise',
  templateUrl: './detail-entreprise.component.html',
  styleUrl: './detail-entreprise.component.css',
  standalone: true,
  imports: [ListeDirectionComponent, CommonModule, LienversComponent],
})
export class DetailEntrepriseComponent {
  idEntreprise: number = 0;
  entreprise: Entreprise = new Entreprise();
  message: String = '';
  constructor(
    private route: ActivatedRoute,
    private entrepriseService: EntrepriseService
  ) {}

  ngOnInit(): void {
    this.message = 'Bienvenu dans notre page de detail';
    this.idEntreprise = this.route.snapshot.params['idEntreprise'];
    this.entrepriseService
      .getEntrepriseById(this.idEntreprise)
      .subscribe((data) => {
        this.entreprise = data;
        console.log('entreprise:', this.entreprise);
      });
  }
}
