//
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
  styleUrls: ['./liste-entreprise.component.css'], // Corrigé de styleUrl à styleUrls
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
    this.entrepriseService.getEntreprises().subscribe({
      next: (data) => {
        this.entreprises = data;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors de la récupération des entreprises.';
        console.error(err);
      },
    });
  }

  updateEntreprise(idEntreprise: number) {
    this.router.navigate(['Accueil/update-entreprise', idEntreprise]);
  }

  detailsEntreprise(idEntreprise: number) {
    this.router.navigate(['Accueil/detail-entreprise', idEntreprise]);
  }

  deleteEntreprise(idEntreprise: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette entreprise ?')) {
      this.entrepriseService.deleteEntrepriseById(idEntreprise).subscribe({
        next: () => {
          this.getEntreprises(); // Rafraîchir la liste après suppression
        },
        error: (err) => {
          this.errorMessage =
            "Erreur lors de la suppression de l'entreprise. Veuillez réessayer.";
          console.error(err);
        },
      });
    }
  }
}
