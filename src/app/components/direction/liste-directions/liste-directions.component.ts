import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Direction } from '../../../models/direction.model';
import { DirectionService } from '../../../services/direction/direction.service';
import { EntrepriseService } from '../../../services/entreprise/entreprise.service';
import { NavbarComponent } from '../../body/navbar/navbar.component';

@Component({
  selector: 'app-liste-directions',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './liste-directions.component.html',
})
export class ListeDirectionsComponent {
  directions: Direction[] = [];
  entreprises: Map<number, string> = new Map();

  constructor(
    private directionService: DirectionService,
    private entrepriseService: EntrepriseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadDirections();
    this.loadEntreprises();
  }

  loadDirections(): void {
    this.directionService.listerDirections().subscribe((data) => {
      this.directions = data;
    });
  }

  loadEntreprises(): void {
    this.entrepriseService.listerEntreprises().subscribe((data) => {
      data.forEach((entreprise) => {
        this.entreprises.set(entreprise.idEntreprise, entreprise.nomEntreprise);
      });
    });
  }

  deleteDirection(id: number): void {
    this.directionService.supprimerDirection(id).subscribe(() => {
      this.loadDirections();
    });
  }

  editDirection(id: number): void {
    this.router.navigate(['/accueil/directions/modifier/', id]);
  }
}
