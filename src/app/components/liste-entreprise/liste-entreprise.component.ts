import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from '../../models/entreprise';
import { EntrepriseService } from '../../service/entreprise.service';

@Component({
  selector: 'app-liste-entreprise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-entreprise.component.html',
  styleUrl: './liste-entreprise.component.css',
})
export class ListeEntrepriseComponent {
  entreprises: Entreprise[] = [];
  errorMessage: string | null = null;
  constructor(
    private entrepriseService: EntrepriseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEntreprises();
  }
  // Logique pour remplir la liste des entreprises

  private getEntreprises() {
    this.entrepriseService.getEntreprises().subscribe((data) => {
      this.entreprises = data;
    });
  }

  updateEntreprise(idEntreprise: number) {
    this.router.navigate(['Accueil/update-entreprise', idEntreprise]);
  }

  detailsEntreprise(idEntreprise: number) {
    this.router.navigate(['Accueil/detail-entreprise', idEntreprise]);
  }

  deleteEntreprise(idEntreprise: number) {
    this.entrepriseService
      .deleteEntrepriseById(idEntreprise)
      .subscribe((data) => {
        console.log(data);
        this.getEntreprises();
      });
  }
}
