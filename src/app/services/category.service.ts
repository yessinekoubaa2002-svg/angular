import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://127.0.0.1:8000/api/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(API_URL);
  }
}