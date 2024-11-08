import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction } from '../../models/direction.model';

@Injectable({
  providedIn: 'root',
})
export class DirectionService {
  private baseUrl = 'http://localhost:8080/api/directions'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) {}

  // Méthode pour lister toutes les directions
  listerDirections(): Observable<Direction[]> {
    return this.http.get<Direction[]>(this.baseUrl);
  }

  // Méthode pour obtenir une direction par son ID
  obtenirDirection(id: number): Observable<Direction> {
    return this.http.get<Direction>(`${this.baseUrl}/${id}`);
  }

  // Méthode pour créer une nouvelle direction
  creerDirection(direction: Direction): Observable<Direction> {
    return this.http.post<Direction>(this.baseUrl, direction);
  }

  // Méthode pour modifier une direction
  modifierDirection(id: number, direction: Direction): Observable<Direction> {
    return this.http.put<Direction>(`${this.baseUrl}/modifier/${id}`, direction);
  }

  // Méthode pour supprimer une direction
  supprimerDirection(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/supprimer/${id}`);
  }
}
