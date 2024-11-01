import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { ButtonComponent } from '../button/button.component';
import { SidebarBtnComponent } from '../sidebar-btn/sidebar-btn.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SidebarBtnComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  @Input() afficherSidebar = false; // Ajout d'un Input pour la liaison
  isSidebarVisible = false;

  constructor(private sidebarService: SidebarService) {}

  ngOnInit() {
    this.sidebarService.sidebarVisibility$.subscribe(
      (isVisible) => (this.isSidebarVisible = isVisible)
    );
  }
}
