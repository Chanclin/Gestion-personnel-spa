import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { LienversComponent } from '../../components/lienvers/lienvers.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonComponent, LienversComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {}
