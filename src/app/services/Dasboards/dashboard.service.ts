import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = environment.apiUrl;  // URL de l'endpoint du backend

  constructor(private http: HttpClient) { }

  getCounts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/count`);
  }
}