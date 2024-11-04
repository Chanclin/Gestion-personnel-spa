import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Direction } from '../../../models/direction.model';
import { Entreprise } from '../../../models/entreprise';
import { DirectionService } from '../../../services/direction/direction.service';
import { EntrepriseService } from '../../../services/entreprise/entreprise.service';
import { BoutonRetourComponent } from '../../ui/bouton-retour/bouton-retour.component';

@Component({
  selector: 'app-form-direction',
  standalone: true,
  imports: [ReactiveFormsModule, BoutonRetourComponent, CommonModule],
  templateUrl: './form-direction.component.html',
})
export class FormDirectionComponent {
  directionForm: FormGroup;
  isEditMode: boolean = false;
  directionId?: number;
  entreprises: Entreprise[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private directionService: DirectionService,
    private entrepriseService: EntrepriseService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.directionForm = this.formBuilder.group({
      nomDirection: ['', Validators.required],
      description: ['', Validators.required],
      idEntreprise: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.entrepriseService.listerEntreprises().subscribe((data) => {
      this.entreprises = data;
    });

    this.route.paramMap.subscribe((params) => {
      this.directionId = +params.get('id')!;
      if (this.directionId) {
        this.isEditMode = true;
        this.loadDirection(this.directionId);
      }
    });
  }

  loadDirection(id: number): void {
    this.directionService.obtenirDirection(id).subscribe((direction) => {
      this.directionForm.patchValue({
        nomDirection: direction.nomDirection,
        description: direction.description,
        idEntreprise: direction.idEntreprise,
      });
    });
  }

  onSubmit(): void {
    const directionData: Direction = this.directionForm.value;
    if (this.isEditMode) {
      this.directionService
        .modifierDirection(this.directionId!, directionData)
        .subscribe(() => {
          this.router.navigate(['accueil/directions']);
        });
    } else {
      this.directionService.creerDirection(directionData).subscribe(() => {
        this.router.navigate(['accueil/directions']);
      });
    }
  }
}
