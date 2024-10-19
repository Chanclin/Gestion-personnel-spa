import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Entreprise } from '../models/entreprise';
import { EntrepriseService } from '../services/entreprise.service';
import { Router } from '@angular/router';
import { DirectionService } from '../services/direction.service';

@Component({
  selector: 'app-create-entreprise',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create-entreprise.component.html',
  styleUrl: './create-entreprise.component.css'
  
})
export class CreateEntrepriseComponent {
  entreprises:Entreprise = new Entreprise();

  


  constructor(private entrepriseService:EntrepriseService, private route:Router){

  }

  onSubmit() {
    if (this.entreprises.nomEntreprise && this.entreprises.adresseEntreprise && this.entreprises.emailEntreprise) {
      this.insertEntreprise();
    } else {
      console.error("Tous les champs doivent être remplis.");
    }
  }

  insertEntreprise() {
    this.entrepriseService.createEntreprise(this.entreprises).subscribe(
      data => {
        console.log("Entreprise créée avec succès", data);
        this.goToEntrepriseList();
      },
      error => {
        console.error("Erreur lors de la création de l'entreprise", error);
      }
    );
  }
  goToEntrepriseList(){
    this.route.navigate(['/entreprises'])
  }

  onCancel() {
    this.goToEntrepriseList(); 
  }


  ngOnInit(): void{

    
  }
  onsubmit(){
    
  }
}
