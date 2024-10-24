import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { LienversComponent } from '../../components/lienvers/lienvers.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, LienversComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
