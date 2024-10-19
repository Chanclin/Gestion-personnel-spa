import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Direction } from '../../models/direction.model';
import { DirectionService } from '../../services/direction.service';

@Component({
  selector: 'app-liste-direction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-direction.component.html',
  styleUrls: ['./liste-direction.component.css'],
})
export class ListeDirectionComponent {
  directions: Direction[] = [];
  errorMessage: string | null = null;

  constructor(private directionService: DirectionService) {}

  ngOnInit() {
    this.directionService.getDirections().subscribe({
      next: (data) => {
        if (data.success) {
          this.directions = data.directions; // Type compatible avec Direction[]
        }
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors de la récupération des données';
        console.error('Erreur:', error);
      },
    });
  }
}
