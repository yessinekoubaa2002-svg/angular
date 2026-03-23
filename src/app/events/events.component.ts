import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  events: any[] = [];

  newEvent :any = {
    title: '',
    date: '',
    description: ''
  };

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAll().subscribe(data => {
      this.events = data;
    });
  }

  addEvent() {
    this.eventService.create(this.newEvent).subscribe(() => {
      this.newEvent = { title: '', date: '', description: '' };
      this.loadEvents();
    });
  }

  deleteEvent(id: number) {
    this.eventService.delete(id).subscribe(() => {
      this.loadEvents();
    });
  }
}