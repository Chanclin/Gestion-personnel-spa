import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Direction } from '../../../models/direction.model';
import { DirectionService } from '../../../services/direction/direction.service';
import { NavbarComponent } from '../../body/navbar/navbar.component';
import { BoutonRetourComponent } from '../../ui/bouton-retour/bouton-retour.component';

@Component({
  selector: 'app-liste-directions',
  standalone: true,
  imports: [CommonModule, NavbarComponent, BoutonRetourComponent],
  templateUrl: './liste-directions.component.html',
})
export class ListeDirectionsComponent implements OnInit {
  directions: Direction[] = [];

  constructor(
    private directionService: DirectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchDirections();
  }

  fetchDirections(): void {
    this.directionService.listerDirections().subscribe((data) => {
      this.directions = data;
    });
  }

  // onModify(direction: Direction): void {
  //   if (direction.idDirection != null) {
  //     this.router.navigate(['/directions/modifier', direction.idDirection]);
  //   } else {
  //     console.error('idDirection est undefined');
  //   }
  // }

  onModify(direction: Direction): void {
    console.log(
      "Redirection vers le formulaire de modification avec l'ID :",
      direction.idDirection
    );
    if (direction.idDirection != null) {
      this.router.navigate([
        '/accueil/directions/modifier',
        direction.idDirection,
      ]);
    } else {
      console.error('idDirection est undefined');
    }
  }

  onDelete(direction: Direction): void {
    if (direction.idDirection != null) {
      this.directionService
        .supprimerDirection(direction.idDirection)
        .subscribe(() => {
          this.directions = this.directions.filter(
            (dir) => dir.idDirection !== direction.idDirection
          );
        });
    } else {
      console.error('idDirection est undefined');
    }
  }

  onDetails(id: number | undefined): void {
    if (id != null) {
      this.router.navigate(['/directions/details', id]);
    } else {
      console.error('id est undefined');
    }
  }
}
