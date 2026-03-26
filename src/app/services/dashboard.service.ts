import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private API_URL = 'http://127.0.0.1:8000/api/dashboard';

  constructor(private http: HttpClient) {}

  getStats() {
    const token = localStorage.getItem('token');

return this.http.get<any>(this.API_URL, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
  }
}