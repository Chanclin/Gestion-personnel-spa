import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { LienversComponent } from '../../components/lienvers/lienvers.component';
import { AuthService } from '../../services/auth-service.service';
import { Utilisateur } from '../../models/utilisateur.model'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    LienversComponent,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required], // Assurez-vous que 'nom' est utilisé ici
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
    return !valid ? { invalidPassword: 'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.' } : null;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const utilisateur: Utilisateur = {
        nom: this.registerForm.value.nom,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      };

      this.authService.register(utilisateur).subscribe((response) => {
        if (response) {
          this.router.navigate(['login']);
        } else {
          console.error('Échec de l\'inscription');
        }
      });
    } else {
      console.error('Le formulaire est invalide', this.registerForm.errors);
    }
  }
}
