import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Direction } from '../../models/direction.model';
import { DirectionService } from '../../service/direction.service';

@Component({
  selector: 'app-liste-direction',
  standalone: true,
  templateUrl: './liste-direction.component.html',
  styleUrls: ['./liste-direction.component.css'],
  imports: [CommonModule],
  providers: [DirectionService],
})
export class ListeDirectionComponent implements OnInit {
  @Input() directions: Direction[] = []; // Définir comme @Input
  @Input() message: string = ''; // Définir comme @Input

  constructor(private directionService: DirectionService) {}

  ngOnInit(): void {
    if (!this.directions.length) {
      this.loadDirections(); // Charge les directions si non fournies
    }
  }

  loadDirections() {
    this.directionService.getDirections().subscribe(
      (response) => {
        if (response.success) {
          this.directions = response.directions;
        } else {
          this.message = 'Erreur lors de la récupération des directions.';
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des directions', error);
        this.message = 'Erreur lors de la récupération des directions.';
      }
    );
  }
}
