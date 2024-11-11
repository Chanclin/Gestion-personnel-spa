// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Ajoutez FormsModule ici
// import { ActivatedRoute, Router } from '@angular/router';
// import { Direction } from '../../../models/direction.model';
// import { DirectionService } from '../../../services/direction/direction.service';
// import { BoutonRetourComponent } from '../../ui/bouton-retour/bouton-retour.component';

// @Component({
//   selector: 'app-form-direction',
//   standalone: true,
//   imports: [
//     ReactiveFormsModule,
//     FormsModule,
//     BoutonRetourComponent,
//     CommonModule,
//   ], // Ajoutez FormsModule ici
//   templateUrl: './form-direction.component.html',
// })
// export class FormDirectionComponent {
//   direction: Direction = {
//     idDirection: undefined,
//     nomDirection: '',
//     description: '',
//     entrepriseId: 0,
//   };
//   isEditMode = false;

//   constructor(
//     private directionService: DirectionService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     const id = this.route.snapshot.params['id'];
//     if (id) {
//       this.isEditMode = true;
//       this.directionService.obtenirDirection(id).subscribe((data) => {
//         this.direction = data;
//       });
//     }
//   }

//   onSubmit(): void {
//     if (this.isEditMode) {
//       this.directionService
//         .modifierDirection(this.direction.idDirection!, this.direction)
//         .subscribe(() => {
//           this.router.navigate(['/directions']);
//         });
//     } else {
//       this.directionService.creerDirection(this.direction).subscribe(() => {
//         this.router.navigate(['/directions']);
//       });
//     }
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from '../../../models/entreprise';
import { DirectionService } from '../../../services/direction/direction.service';
import { EntrepriseService } from '../../../services/entreprise/entreprise.service';
import { NavbarComponent } from '../../body/navbar/navbar.component';
import { BoutonRetourComponent } from '../../ui/bouton-retour/bouton-retour.component';

@Component({
  selector: 'app-form-direction',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BoutonRetourComponent,
    NavbarComponent,
    FormsModule,
    CommonModule,
  ], // Import du ReactiveFormsModule ici
  templateUrl: './form-direction.component.html',
})
export class FormDirectionComponent implements OnInit {
  directionForm: FormGroup;
  directionId: number | null = null;
  isEditing: boolean = false;
  entreprises: Entreprise[] = [];

  constructor(
    private fb: FormBuilder,
    private directionService: DirectionService,
    private entrepriseService: EntrepriseService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.directionForm = this.fb.group({
      nomDirection: ['', Validators.required],
      description: ['', Validators.required],
      entrepriseId: ['', Validators.required], // Assurez-vous que l'entreprise est sélectionnée
    });
  }

  ngOnInit(): void {
    // Récupérer toutes les entreprises pour la sélection
    this.entrepriseService.listerEntreprises().subscribe((entreprises) => {
      this.entreprises = entreprises;
    });

    // Si nous sommes en mode édition, récupérer les informations de la direction
    this.directionId = +this.route.snapshot.paramMap.get('id')!;
    if (this.directionId) {
      this.isEditing = true;
      this.directionService
        .obtenirDirection(this.directionId)
        .subscribe((direction) => {
          this.directionForm.patchValue(direction);
        });
    }
  }

  submitForm(): void {
    if (this.directionForm.invalid) {
      console.error('Formulaire invalide');
      return;
    }

    console.log('Données du formulaire :', this.directionForm.value);

    if (this.isEditing) {
      // Modifier la direction
      this.directionService
        .modifierDirection(this.directionId!, this.directionForm.value)
        .subscribe({
          next: () => {
            this.router.navigate(['accueil/directions']);
          },
          error: (error) => {
            console.error('Erreur de modification:', error);
          },
        });
    } else {
      // Créer une nouvelle direction
      this.directionService.creerDirection(this.directionForm.value).subscribe({
        next: () => {
          console.log('Direction créée avec succès');
          this.router.navigate(['accueil/directions']);
        },
        error: (error) => {
          console.error('Erreur de création:', error);
        },
      });
    }
  }
}
