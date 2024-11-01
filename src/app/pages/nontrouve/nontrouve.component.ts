import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { BtnDesignComponent } from '../../components/btn-design/btn-design.component';

@Component({
  selector: 'app-nontrouve',
  standalone: true,
  imports: [ButtonComponent, BtnDesignComponent],
  templateUrl: './nontrouve.component.html',
  styleUrl: './nontrouve.component.css',
})
export class NontrouveComponent {}
