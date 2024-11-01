import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { Router } from '@angular/router';
import { Direction } from '../../models/direction.model';
import { Entreprise } from '../../models/entreprise';
import { DirectionService } from '../../service/direction.service';

@Component({
  selector: 'app-create-direction',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-direction.component.html',
  styleUrl: './create-direction.component.css',
})
export class CreateDirectionComponent {
  direction: Direction = new Direction();
  entreprises: Entreprise[] = [];

  constructor(
    private directionService: DirectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEntreprises();
  }

  loadEntreprises() {
    this.directionService.getEntrepriseList().subscribe(
      (data) => (this.entreprises = data),
      (error) =>
        console.error('Erreur lors du chargement des entreprises', error)
    );
  }

  onSubmit() {
    if (
      this.direction.nomDirection &&
      this.direction.description &&
      this.direction.idEntreprise
    ) {
      this.createDirection();
    } else {
      console.error('Tous les champs doivent être remplis.');
    }
  }

  createDirection() {
    this.directionService.createDirection(this.direction).subscribe(
      (data) => {
        console.log('Direction créée avec succès', data);
        this.router.navigate(['Accueil/Directions']);
      },
      (error) =>
        console.error('Erreur lors de la création de la direction', error)
    );
  }

  onCancel() {
    this.router.navigate(['Accueil/Directions']);
  }
}
