import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-my-registrations',
  templateUrl: './my-registrations.component.html'
})
export class MyRegistrationsComponent implements OnInit {

  registrations: any[] = [];

  constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.loadRegistrations();
  }

  loadRegistrations() {
    this.registrationService.getMyRegistrations().subscribe(data => {
      this.registrations = data;
    });
  }

  cancel(eventId: number) {
    this.registrationService.cancel(eventId).subscribe(() => {
      alert('Cancelled ❌');
      this.loadRegistrations(); // refresh
    });
  }
}