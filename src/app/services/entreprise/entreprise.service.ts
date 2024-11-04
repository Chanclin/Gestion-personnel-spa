import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entreprise } from '../../models/entreprise';

@Injectable({
  providedIn: 'root',
})
export class EntrepriseService {
  private apiUrl = 'http://localhost:8080/api/entreprises'; // URL de base de l'API

  constructor(private http: HttpClient) {}

  // Obtenir la liste de toutes les entreprises
  listerEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.apiUrl);
  }

  // Créer une nouvelle entreprise
  creerEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(this.apiUrl, entreprise);
  }

  // Obtenir une entreprise par ID
  obtenirEntreprise(id: number): Observable<Entreprise> {
    return this.http.get<Entreprise>(`${this.apiUrl}/lister/${id}`);
  }

  // Modifier une entreprise existante
  modifierEntreprise(
    id: number,
    entreprise: Entreprise
  ): Observable<Entreprise> {
    return this.http.put<Entreprise>(
      `${this.apiUrl}/modifier/${id}`,
      entreprise
    );
  }

  // Supprimer une entreprise par ID
  supprimerEntreprise(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/supprimer/${id}`);
  }
}
