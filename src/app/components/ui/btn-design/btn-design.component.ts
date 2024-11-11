import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-design',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-design.component.html',
})
export class BtnDesignComponent {
  @Input() text: string = 'Cliquez ici';
  @Input() navigateTo: string = '/';

  constructor(private router: Router) {}

  handleNavigation() {
    this.router.navigate([this.navigateTo]);
  }
}
