import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/api';

  getAllUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getalluser`);
  }

  getUser(username): Observable<any> {
    return this.http.get(`${this.baseUrl}/readuser/${username}`);
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

  register(username: string, password: string) {
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(`${this.baseUrl}/register`, body.toString(), options)
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteUser/${id}`);
  }

  getAllBook(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallbook`);
  }

  createBook(title: string, author: string, description: string) {
    let body = new URLSearchParams();
    body.set('title', title);
    body.set('author', author);
    body.set('description', description);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(`${this.baseUrl}/createbook`, body.toString(), options)
  }

  editBook(title: string, author: string, description: string, id: string) {
    let body = new URLSearchParams();
    body.set('title', title);
    body.set('author', author);
    body.set('description', description);

    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.put(`${this.baseUrl}/updatebook/${id}`, body.toString(), options)
  }

  deleteBook(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletebook/${id}`);
  }

}
