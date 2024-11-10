import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from '../../models/entreprise';

@Injectable({
  providedIn: 'root',
})
export class EntrepriseService {
  private apiUrl = 'http://localhost:8080/api/entreprises';

  constructor(private http: HttpClient) {}

  listerEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.apiUrl);
  }

  creerEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(`${this.apiUrl}/creer`, entreprise);
  }

  modifierEntreprise(
    id: number,
    entreprise: Entreprise
  ): Observable<Entreprise> {
    return this.http.put<Entreprise>(
      `${this.apiUrl}/modifier/${id}`,
      entreprise
    );
  }

  obtenirEntreprise(id: number): Observable<Entreprise> {
    return this.http.get<Entreprise>(`${this.apiUrl}/lister/${id}`);
  }

  supprimerEntreprise(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/supprimer/${id}`);
  }
}
