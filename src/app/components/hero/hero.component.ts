import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnDesignComponent } from '../btn-design/btn-design.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [BtnDesignComponent, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}
