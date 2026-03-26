import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private API_URL = 'http://127.0.0.1:8000/api/registrations';

  constructor(private http: HttpClient) {}

  register(eventId: number) {
    const token = localStorage.getItem('token');

    return this.http.post(this.API_URL, 
      { event_id: eventId },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
  getMyRegistrations() {
  const token = localStorage.getItem('token');

  return this.http.get<any>(
    'http://127.0.0.1:8000/api/my-registrations',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

cancel(eventId: number) {
  const token = localStorage.getItem('token');

  return this.http.delete(
    `http://127.0.0.1:8000/api/registrations/${eventId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}
}