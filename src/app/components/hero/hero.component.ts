import { Component } from '@angular/core';
import { BtnDesignComponent } from '../btn-design/btn-design.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [BtnDesignComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}
