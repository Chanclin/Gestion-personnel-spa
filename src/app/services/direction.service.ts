import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction } from '../models/direction.model'; // Import de l'interface depuis le fichier de model

@Injectable({
  providedIn: 'root',
})
export class DirectionService {
  private apiUrl = 'http://localhost:8080/api/directions';

  constructor(private http: HttpClient) {}

  getDirections(): Observable<{ success: boolean; directions: Direction[] }> {
    return this.http.get<{ success: boolean; directions: Direction[] }>(
      this.apiUrl
    );
  }
}
