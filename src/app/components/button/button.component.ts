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
  @Input() textBtn: string = 'Changez moi';
  @Input() buttonColor: string = '#1896c7';
  @Input() navigateTo: string = '/';

  constructor(private router: Router) {}

  handleNavigation() {
    this.router.navigate([this.navigateTo]);
  }
}
