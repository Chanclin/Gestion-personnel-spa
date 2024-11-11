import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { CustomBtnComponent } from '../../components/ui/custom-btn/custom-btn.component';
import { CustomLienComponent } from '../../components/ui/custom-lien/custom-lien.component';
import { Utilisateur } from '../../models/utilisateur.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomLienComponent,
    CustomBtnComponent,
    ButtonComponent,
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
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

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
