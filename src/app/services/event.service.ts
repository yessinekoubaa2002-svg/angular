import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventModel } from '../models/event';

const API_URL = 'http://127.0.0.1:8000/api/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {}

  // 🔐 headers فيها token
  private getHeaders() {
    const token = localStorage.getItem('token');

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  getAll(categoryId?: number, search?: string) {
    let url = API_URL;
    let params: string[] = [];

    if (categoryId !== null && categoryId !== undefined) {
      params.push(`category_id=${categoryId}`);
    }

    if (search) {
      params.push(`search=${search}`);
    }

    if (params.length > 0) {
      url += '?' + params.join('&');
    }

    return this.http.get<EventModel[]>(url);
  }

  getById(id: number): Observable<EventModel> {
    return this.http.get<EventModel>(`${API_URL}/${id}`);
  }

  create(event: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(API_URL, event, this.getHeaders());
  }

  update(id: number, event: EventModel): Observable<EventModel> {
    return this.http.put<EventModel>(`${API_URL}/${id}`, event, this.getHeaders());
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`, this.getHeaders());
  }
}