import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Direction } from '../../models/direction.model';
import { DirectionService } from '../../service/direction.service';

@Component({
  selector: 'app-liste-direction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-direction.component.html',
  styleUrls: ['./liste-direction.component.css'],
  providers: [DirectionService],
})
export class ListeDirectionComponent implements OnInit {
  @Input() directions: Direction[] = []; // Déclarez directions comme propriété d'Input
  @Input() message: string = ''; // Déclarez message comme propriété d'Input

  constructor(private directionService: DirectionService) {}

  ngOnInit(): void {
    this.loadDirections();
  }

  loadDirections() {
    this.directionService.getDirections().subscribe({
      next: (response) => {
        if (response.success) {
          this.directions = response.directions;
        } else {
          this.message = 'Erreur lors de la récupération des directions.';
        }
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des directions', error);
        this.message = 'Erreur lors de la récupération des directions.';
      },
    });
  }
}
