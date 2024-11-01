import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-nontrouve',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './nontrouve.component.html',
  styleUrl: './nontrouve.component.css',
})
export class NontrouveComponent {}
