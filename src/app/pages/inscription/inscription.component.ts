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
import { ButtonComponent } from '../../components/ui/button/button.component';
import { Utilisateur } from '../../models/utilisateur.model';
import { AuthService } from '../../services/auth/auth.service';
import { LienversComponent } from '../../components/ui/lienvers/lienvers.component';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    LienversComponent,
  ],
  templateUrl: './inscription.component.html',
})
export class InscriptionComponent {
  inscriptionForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.inscriptionForm = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(8), this.passwordValidator],
      ],
    });
  }

  /**
   * Validateur personnalisé pour les mots de passe
   */
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

  /**
   * Soumission du formulaire
   */
  onSubmit(): void {
    if (this.inscriptionForm.valid) {
      const utilisateur: Utilisateur = {
        nom: this.inscriptionForm.value.nom,
        email: this.inscriptionForm.value.email,
        password: this.inscriptionForm.value.password,
      };

      this.authService.inscription(utilisateur).subscribe({
        next: (success) => {
          if (success) {
            this.router.navigate(['connexion']);
          } else {
            this.errorMessage = "Échec de l'inscription. Veuillez réessayer.";
          }
        },
        error: (error) => {
          this.errorMessage =
            'Erreur de serveur: ' +
            (error.message || "Impossible de se connecter à l'API.");
        },
      });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs obligatoires.';
    }
  }
}
