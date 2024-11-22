import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction } from '../../models/direction.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DirectionService {
  private apiUrl = environment.apiUrl; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) {}

  // Méthode pour lister toutes les directions
  listerDirections(): Observable<Direction[]> {
    return this.http.get<Direction[]>(`${this.apiUrl}/api/directions`);
  }

  // Obtenir une direction par ID
  obtenirDirection(id: number): Observable<Direction> {
    return this.http.get<Direction>(`${this.apiUrl}/api/directions/lister/${id}`);
  }

  // Créer une nouvelle direction
  creerDirection(direction: Direction): Observable<Direction> {
    return this.http.post<Direction>(`${this.apiUrl}/api/directions`, direction);
  }

  // Modifier une direction existante
  modifierDirection(id: number, direction: Direction): Observable<Direction> {
    return this.http.put<Direction>(`${this.apiUrl}/api/directions/modifier/${id}`, direction);
  }

  // Supprimer une direction par ID
  supprimerDirection(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/directions/supprimer/${id}`);
  }
}
