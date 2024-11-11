import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from '../../../models/entreprise';
import { EntrepriseService } from '../../../services/entreprise/entreprise.service';
import { BoutonRetourComponent } from '../../ui/bouton-retour/bouton-retour.component';
import { NavbarComponent } from '../../body/navbar/navbar.component';
@Component({
  selector: 'app-details-entreprise',
  standalone: true,
  imports: [CommonModule, BoutonRetourComponent, NavbarComponent],
  templateUrl: './details-entreprise.component.html',
})
export class DetailsEntrepriseComponent {
  entreprise: Entreprise | null = null;

  constructor(
    private route: ActivatedRoute,
    private entrepriseService: EntrepriseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.entrepriseService.obtenirEntreprise(id).subscribe(
        (entreprise) => {
          this.entreprise = entreprise;
        },
        (error) => {
          console.error(
            "Erreur lors de la récupération de l'entreprise:",
            error
          );
          this.router.navigate(['/accueil/entreprises']); // Redirige en cas d'erreur
        }
      );
    }
  }
}
