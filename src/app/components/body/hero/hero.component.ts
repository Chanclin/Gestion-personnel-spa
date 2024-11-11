import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BtnDesignComponent } from '../../ui/btn-design/btn-design.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [BtnDesignComponent, CommonModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}
