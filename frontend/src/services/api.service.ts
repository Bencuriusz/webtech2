import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';

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

  login(username: string, password: string) {
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(`${this.baseUrl}/login`, body.toString(), options)
  }

  create(data): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
