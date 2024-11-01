import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { LienversComponent } from '../../components/lienvers/lienvers.component';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    LienversComponent,
  ],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {
  connexionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.connexionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(8), this.passwordValidator],
      ],
    });
  }

  passwordValidator(control: AbstractControl) {
    const value = control.value;
    const hasNumber = /[0-9]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const valid = hasNumber && hasUpper && hasLower && hasSpecial;
    if (!valid) {
      return {
        invalidPassword:
          'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.',
      };
    }
    return null;
  }

  onSubmit() {
    if (this.connexionForm.valid) {
      const email = this.connexionForm.get('email')?.value;
      const password = this.connexionForm.get('password')?.value;
      this.authService.connexion(email, password).subscribe((response) => {
        if (response) {
          this.router.navigate(['Accueil']);
        } else {
          console.error('Invalid credentials');
        }
      });
    } else {
      console.error('Form invalid');
    }
  }
}
