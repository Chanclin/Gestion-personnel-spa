import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  
  @Input() directions: Direction[] = [];
  constructor() {}

  ngOnInit() {
    
  }
}
