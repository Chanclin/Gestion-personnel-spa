import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from '../models/entreprise';


@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  
  private apiUrl = "http://localhost:8080/api/entreprises";
  constructor(private httpClient:HttpClient ) { }

  getEntreprises(): Observable<Entreprise[]> {
    return this.httpClient.get<Entreprise[]>(`${this.apiUrl}/lister`);
      
  }

  createEntreprise(entreprise:Entreprise):Observable<object>{
    return this.httpClient.post(`${this.apiUrl}/creer`,entreprise);
   }
   
   
   getEntrepriseById(idEntreprise:number):Observable<Entreprise>{
     return this.httpClient.get<Entreprise>(`${this.apiUrl}/lister/${idEntreprise}`);
   }
   
   updateEntreprise(idEntreprise:number,entreprise:Entreprise):Observable<Entreprise>{
     return this.httpClient.put<Entreprise>(`${this.apiUrl}/modifier/${idEntreprise}`,entreprise);
   
   }
   
   deleteEntrepriseById(idEntreprise:number):Observable<object>{
     return this.httpClient.delete<Entreprise>(`${this.apiUrl}/supprimer/${idEntreprise}`);
   }
  
}
