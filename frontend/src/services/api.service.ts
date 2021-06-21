import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/api';

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }

  get(username): Observable<any> {
    return this.http.get(`${this.baseUrl}/read/${username}`);
  }

  create(data): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
