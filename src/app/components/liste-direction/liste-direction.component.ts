import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Direction } from '../../models/direction.model';
import { DirectionService } from '../../service/direction.service'; // Ensure this import is correct

@Component({
  selector: 'app-liste-direction',
  standalone: true,
  templateUrl: './liste-direction.component.html',
  styleUrls: ['./liste-direction.component.css'],
  imports: [CommonModule],
  providers: [DirectionService],
})
export class ListeDirectionComponent implements OnInit {
  @Input() directions: Direction[] = [];
  @Input() message: string = '';

  constructor(private directionService: DirectionService) {}

  ngOnInit(): void {
    this.loadDirections();
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
