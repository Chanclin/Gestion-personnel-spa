import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from '../../../services/entreprise/entreprise.service';
import { BoutonRetourComponent } from '../../ui/bouton-retour/bouton-retour.component';

@Component({
  selector: 'app-form-entreprise',
  standalone: true,
  imports: [ReactiveFormsModule, BoutonRetourComponent], // Import du ReactiveFormsModule ici
  templateUrl: './form-entreprise.component.html',
})
export class FormEntrepriseComponent implements OnInit {
  entrepriseForm: FormGroup;
  entrepriseId: number | null = null;
  isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private entrepriseService: EntrepriseService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.entrepriseForm = this.fb.group({
      nomEntreprise: ['', Validators.required],
      adresseEntreprise: ['', Validators.required],
      emailEntreprise: ['', [Validators.required, Validators.email]],
    });
  }

  submitForm(): void {
    if (this.entrepriseForm.invalid) {
      console.error('Formulaire invalide');
      return;
    }

    console.log('Données du formulaire :', this.entrepriseForm.value);

    if (this.isEditing) {
      this.entrepriseService
        .modifierEntreprise(this.entrepriseId!, this.entrepriseForm.value)
        .subscribe({
          next: () => {
            this.router.navigate(['accueil/entreprises']);
          },
          error: (error) => {
            console.error('Erreur de modification:', error);
          },
        });
    } else {
      this.entrepriseService
        .creerEntreprise(this.entrepriseForm.value)
        .subscribe({
          next: () => {
            console.log('Entreprise créée avec succès');
            this.router.navigate(['accueil/entreprises']);
          },
          error: (error) => {
            console.error('Erreur de création:', error);
          },
        });
    }
  }

  ngOnInit(): void {
    this.entrepriseId = +this.route.snapshot.paramMap.get('id')!;
    if (this.entrepriseId) {
      this.isEditing = true;
      this.entrepriseService
        .obtenirEntreprise(this.entrepriseId)
        .subscribe((entreprise) => {
          this.entrepriseForm.patchValue(entreprise);
        });
    }
  }
}
