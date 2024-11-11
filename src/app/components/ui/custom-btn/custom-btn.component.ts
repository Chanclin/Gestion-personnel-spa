import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-btn.component.html',
})
export class CustomBtnComponent {
  @Input() label: string = 'Button'; // Texte du bouton
  @Input() route: string = '/'; // Route à naviguer
  @Input() disabled: boolean = false; // Etat désactivé
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; // Type de bouton, 'button' par défaut
  @Input() bgColor: string = 'bg-transparent';

  @Input() paddingY?: string;
  @Input() paddingX?: string;
  @Input() textSize?: string;
  @Input() textColor?: string;
  @Input() borderRadius?: string;
  @Input() fontWeight?: string;
  @Input() cursor?: string;
  @Input() shadow?: string;
  @Input() transition?: string;
  @Input() duration?: string;
  @Input() hoverBgColor?: string;

  constructor(private router: Router) {}

  navigate() {
    if (!this.disabled && this.route) {
      this.router.navigate([this.route]);
    }
  }

  get buttonClasses(): string {
    return [
      this.paddingY,
      this.paddingX,
      this.textSize,
      this.bgColor,
      this.textColor,
      this.borderRadius,
      this.fontWeight,
      this.shadow,
      this.transition,
      this.duration,
      this.hoverBgColor,
      this.disabled ? 'opacity-50 cursor-not-allowed' : this.cursor,
    ]
      .filter(Boolean) // Supprime les valeurs non définies
      .join(' ');
  }
}
