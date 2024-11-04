import { CommonModule } from '@angular/common'; // Importer CommonModule
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-btn.component.html',
  styleUrl: './sidebar-btn.component.css',
})
export class SidebarBtnComponent {
  @Input() buttonColor: string = 'blue';
  @Input() textBtn: string = 'Changez moi';
  @Input() navigateTo: string = '';

  constructor(private router: Router) {}

  handleNavigation() {
    this.router.navigate([this.navigateTo]);
  }
}
