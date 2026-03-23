import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:8000/api/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(API_URL);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${API_URL}/${id}`);
  }

  create(event: any): Observable<any> {
    return this.http.post(API_URL, event);
  }

  update(id: number, event: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, event);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}