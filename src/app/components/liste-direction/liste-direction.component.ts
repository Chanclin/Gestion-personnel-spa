import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Direction } from '../../models/direction.model';
import { DirectionService } from '../../services/direction.service';

@Component({
  selector: 'app-liste-direction',
  standalone: true,
  templateUrl: './liste-direction.component.html',
  styleUrls: ['./liste-direction.component.css'],
  imports:[CommonModule],
})
export class ListeDirectionComponent {
  
  @Input()  directions: Direction[] = [];
  @Input()  message:String='';
  constructor() {}

  ngOnInit() {
    
  }
}
