import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entreprise } from '../../models/entreprise';
import { EntrepriseService } from '../../service/entreprise.service';
import { LienversComponent } from '../lienvers/lienvers.component';
import { ListeDirectionComponent } from '../liste-direction/liste-direction.component';

@Component({
  selector: 'app-detail-entreprise',
  templateUrl: './detail-entreprise.component.html',
  styleUrls: ['./detail-entreprise.component.css'],
  standalone: true,
  imports: [ListeDirectionComponent, CommonModule, LienversComponent],
})
export class DetailEntrepriseComponent implements OnInit {
  idEntreprise: number = 0;
  entreprise: Entreprise = new Entreprise();
  message: string = 'Bienvenue dans notre page de détail';

  constructor(
    private route: ActivatedRoute,
    private entrepriseService: EntrepriseService
  ) {}

  ngOnInit(): void {
    this.idEntreprise = this.route.snapshot.params['idEntreprise'];
    this.entrepriseService
      .getEntrepriseById(this.idEntreprise)
      .subscribe((data) => {
        this.entreprise = data;
        console.log('entreprise:', this.entreprise);
      });
  }
}
