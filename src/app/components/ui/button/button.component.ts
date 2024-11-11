import { CommonModule } from '@angular/common'; // Importer CommonModule
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() buttonColor: string = 'blue';
  @Input() textBtn: string = 'Changez moi';
  @Input() navigateTo: string = '';

  constructor(private router: Router) {}

  handleNavigation() {
    this.router.navigate([this.navigateTo]);
  }
}
