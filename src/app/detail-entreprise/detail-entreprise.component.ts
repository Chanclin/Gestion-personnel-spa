import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entreprise } from '../models/entreprise';
import { EntrepriseService } from '../services/entreprise.service';

@Component({
  selector: 'app-detail-entreprise',
  templateUrl: './detail-entreprise.component.html',
  styleUrl: './detail-entreprise.component.css'
})
export class DetailEntrepriseComponent {

  idEntreprise:number=0;
  entreprise:Entreprise= new Entreprise();
constructor(private route:ActivatedRoute,private entrepriseService:EntrepriseService){}

ngOnInit():void{

  this.idEntreprise=this.route.snapshot.params['idEntreprise'];
  this.entrepriseService.getEntrepriseById(this.idEntreprise).subscribe(data=>{
    this.entreprise=data;
  })
}
}
