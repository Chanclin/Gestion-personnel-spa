import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entreprise } from '../../models/entreprise';
import { EntrepriseService } from '../../services/entreprise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-entreprise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-entreprise.component.html',
  styleUrl: './liste-entreprise.component.css'
})
export class ListeEntrepriseComponent {
entreprises:Entreprise[]=[];
errorMessage: string | null = null;
constructor(private entrepriseService: EntrepriseService , private router: Router){}


ngOnInit(): void {
  this.getEntreprises();
}
// Logique pour remplir la liste des entreprises


private getEntreprises(){
  this.entrepriseService.getEntreprises().subscribe(data=>{
    this.entreprises=data;
  })
}

updateEntreprise(idEntreprise:number){
  this.router.navigate(['update-entreprise',idEntreprise]);
}

detailsEntreprise(idEntreprise:number){
  this.router.navigate(['detail-Entreprise',idEntreprise]);
}

deleteEntreprise(idEntreprise:number){
  this.entrepriseService.deleteEntrepriseById(idEntreprise).subscribe(data=>{
    console.log(data);
    this.getEntreprises();
  })

}
}
