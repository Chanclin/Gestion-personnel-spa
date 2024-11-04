import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-lien',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-lien.component.html',
})
export class CustomLienComponent {
  // Propriétés essentielles
  @Input() label: string = 'Link';
  @Input() route: string = '/';

  // Propriétés optionnelles sans valeurs par défaut
  @Input() paddingY?: string;
  @Input() paddingX?: string;
  @Input() textSize?: string;
  @Input() textColor?: string;
  @Input() bgColor?: string;
  @Input() borderRadius?: string;
  @Input() fontWeight?: string;
  @Input() cursor?: string;
  @Input() shadow?: string;
  @Input() transition?: string;
  @Input() duration?: string;
  @Input() hoverBgColor?: string;
  @Input() hoverTextColor?: string;
  @Input() textFont?: string;
  @Input() textDecor?: string;

  constructor(private router: Router) {}

  // Méthode de navigation
  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }

  // Génère la liste des classes en fonction des propriétés fournies
  get linkClasses(): string {
    return [
      this.paddingY,
      this.paddingX,
      this.textSize,
      this.textColor,
      this.bgColor,
      this.borderRadius,
      this.fontWeight,
      this.cursor,
      this.shadow,
      this.transition,
      this.duration,
      this.hoverBgColor,
      this.hoverTextColor,
      this.textFont,
      this.textDecor,
    ]
      .filter(Boolean) // Supprime les valeurs non définies
      .join(' ');
  }
}
