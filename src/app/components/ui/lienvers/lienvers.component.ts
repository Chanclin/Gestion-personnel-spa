import { CommonModule } from '@angular/common'; // Importer CommonModule
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lienvers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lienvers.component.html',
  styleUrl: './lienvers.component.css',
})
export class LienversComponent {
  @Input() textlien: string = 'Changez moi';
  @Input() navigateTo: string = '/';

  constructor(private router: Router) {}

  handleNavigation() {
    this.router.navigate([this.navigateTo]);
  }
}
