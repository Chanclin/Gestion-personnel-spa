import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  @Input() name: string = '';
  @Input() position: string = '';
  @Input() imageUrl: string = '';
}
