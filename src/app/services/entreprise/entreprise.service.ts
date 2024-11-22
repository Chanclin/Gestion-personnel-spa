import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from '../../models/entreprise';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EntrepriseService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listerEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(`${this.apiUrl}/api/entreprises`);
  }

  creerEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(`${this.apiUrl}/api/entreprises`, entreprise);
  }

  modifierEntreprise(
    id: number,
    entreprise: Entreprise
  ): Observable<Entreprise> {
    return this.http.put<Entreprise>(
      `${this.apiUrl}/api/entreprises/modifier/${id}`,
      entreprise
    );
  }

  obtenirEntreprise(id: number): Observable<Entreprise> {
    return this.http.get<Entreprise>(`${this.apiUrl}/api/entreprises/lister/${id}`);
  }

  supprimerEntreprise(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/entreprises/supprimer/${id}`);
  }
}
