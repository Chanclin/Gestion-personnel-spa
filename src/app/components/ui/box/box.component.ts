import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/Dasboards/dashboard.service';

@Component({
  selector: 'app-box',
  standalone: true,
  templateUrl: './box.component.html',
})
export class BoxComponent implements OnInit {
  @Input() type: string = ''; // Le type de données à afficher (ex: "entreprises" ou "directions")
  @Input() title: string = ''; // Titre pour personnaliser le box
  totalCount: number = 0; // Nombre total à afficher

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    // Appel du service en fonction du type passé
    this.dashboardService.getCounts().subscribe({
      next: (data) => {
        if (this.type === 'entreprises') {
          this.totalCount = data.entreprises;
        } else if (this.type === 'directions') {
          this.totalCount = data.directions;
        } else {
          console.warn(`Type "${this.type}" inconnu.`);
        }
      },
      error: (err) => {
        console.error('Error fetching counts:', err);
      }
    });
  }
}
