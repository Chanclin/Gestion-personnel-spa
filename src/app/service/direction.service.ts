import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction } from '../models/direction.model';
import { Entreprise } from '../models/entreprise';

@Injectable({
  providedIn: 'root',
})
export class DirectionService {
  private apiUrl = 'http://localhost:8080/api/directions';
  private entreprisesUrl = 'http://localhost:8080/api/entreprises';

  constructor(private http: HttpClient) {}

  getDirections(): Observable<{ success: boolean; directions: Direction[] }> {
    return this.http.get<{ success: boolean; directions: Direction[] }>(
      this.apiUrl
    );
  }

  createDirection(direction: Direction): Observable<object> {
    return this.http.post(`${this.apiUrl}`, direction);
  }

  getDirectionById(idDirection: number): Observable<Direction> {
    return this.http.get<Direction>(`${this.apiUrl}/${idDirection}`);
  }

  updateDirection(
    idDirection: number,
    direction: Direction
  ): Observable<Direction> {
    return this.http.put<Direction>(`${this.apiUrl}/${idDirection}`, direction);
  }

  deleteDirectionById(idDirection: number): Observable<object> {
    return this.http.delete<object>(`${this.apiUrl}/${idDirection}`);
  }

  getEntrepriseList(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.entreprisesUrl);
  }
}
