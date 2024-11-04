import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from '../../../models/entreprise';
import { EntrepriseService } from '../../../services/entreprise/entreprise.service';
import { SearchbarComponent } from '../../ui/searchbar/searchbar.component';
import { NavbarComponent } from '../../body/navbar/navbar.component';
@Component({
  selector: 'app-liste-entreprises',
  standalone: true,
  imports: [CommonModule, SearchbarComponent, NavbarComponent],
  templateUrl: './liste-entreprises.component.html',
})
export class ListeEntreprisesComponent {
  entreprises: Entreprise[] = [];

  constructor(
    private entrepriseService: EntrepriseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.entrepriseService.listerEntreprises().subscribe((data) => {
      this.entreprises = data;
    });
  }

  goToDetails(id: number): void {
    this.router.navigate([`/accueil/entreprises/details/${id}`]);
  }

  goToEdit(id: number): void {
    this.router.navigate([`/accueil/entreprises/modifier/${id}`]);
  }

  deleteEntreprise(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette entreprise ?')) {
      this.entrepriseService.supprimerEntreprise(id).subscribe(() => {
        this.entreprises = this.entreprises.filter(
          (e) => e.idEntreprise !== id
        );
      });
    }
  }
}
