import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction } from '../../models/direction.model';

@Injectable({
  providedIn: 'root',
})
export class DirectionService {
  private apiUrl = 'http://localhost:8080/api/directions'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) {}

  // Méthode pour lister toutes les directions
  listerDirections(): Observable<Direction[]> {
    return this.http.get<Direction[]>(this.apiUrl);
  }

  // Obtenir une direction par ID
  obtenirDirection(id: number): Observable<Direction> {
    return this.http.get<Direction>(`${this.apiUrl}/lister/${id}`);
  }

  // Créer une nouvelle direction
  creerDirection(direction: Direction): Observable<Direction> {
    return this.http.post<Direction>(`${this.apiUrl}`, direction);
  }

  // Modifier une direction existante
  modifierDirection(id: number, direction: Direction): Observable<Direction> {
    return this.http.put<Direction>(`${this.apiUrl}/modifier/${id}`, direction);
  }

  // Supprimer une direction par ID
  supprimerDirection(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/supprimer/${id}`);
  }
}
