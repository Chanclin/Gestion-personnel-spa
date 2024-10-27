import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BtnDesignComponent } from '../../components/btn-design/btn-design.component';
import { ButtonComponent } from '../../components/button/button.component';
import { LienversComponent } from '../../components/lienvers/lienvers.component';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    LienversComponent,
    BtnDesignComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]], // Ajout du validateur personnalisé ici
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const credentials = this.loginForm.value;
    this.authService.login(credentials).subscribe({
      next: () => this.router.navigate(['/home']), // Redirection en cas de succès
      error: (err) => {
        this.errorMessage =
          'Échec de la connexion. Veuillez vérifier vos identifiants.';
      },
    });
  }

  // Fonction de validation du mot de passe
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
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
}
