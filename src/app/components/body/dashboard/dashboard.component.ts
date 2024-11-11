import { Component } from '@angular/core';
import { CustomLienComponent } from '../../ui/custom-lien/custom-lien.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SearchbarComponent } from '../../ui/searchbar/searchbar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { BoxComponent } from '../../ui/box/box.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CustomLienComponent,
    SidebarComponent,
    SearchbarComponent,
    NavbarComponent,
    BoxComponent,
    FooterComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
