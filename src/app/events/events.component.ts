import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { EventModel } from '../models/event';
import { CategoryService } from '../services/category.service';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
  searchTerm: string = '';
  selectedCategoryId: number | null = null;
  categories: any[] = [];
  selectedId: number | null = null;
  events: EventModel[] = [];
  newEvent: any = {
  title: '',
  description: '',
  event_date: '',
  end_date: '',
  location: '',
  category_id: 1,
  capacity: 0,
  price: 0,
  is_free: true
};

resetForm() {
  this.newEvent = {
    title: '',
    description: '',
    event_date: '',
    end_date: '',
    location: '',
    category_id: 1,
    capacity: 0,
    price: 0,
    is_free: true
  };

  this.selectedId = null;
}

  constructor(private eventService: EventService , private categoryService: CategoryService,private registrationService: RegistrationService) {}

  get role() {
  return localStorage.getItem('role');
}
  ngOnInit(): void {
    this.loadEvents();
    this.loadCategories();
  }
  loadCategories() {
  this.categoryService.getAll().subscribe(data => {
    this.categories = data;
  });
}

  loadEvents() {
  this.eventService
    .getAll(this.selectedCategoryId || undefined, this.searchTerm)
    .subscribe(data => {
      this.events = data;
    });
}

  addEvent() {
    this.eventService.create(this.newEvent).subscribe(() => {
      this.newEvent = { title: '', event_date: '', description: '',end_date:'',location:'',category_id:1,capacity:0,price:0 ,is_free:true};
      this.loadEvents();
    });
  }

  deleteEvent(id: number) {
    this.eventService.delete(id).subscribe(() => {
      this.loadEvents();
    });
  }
  editEvent(event: any) {
  this.newEvent = {
    ...event,
    event_date: event.event_date.split('T')[0],
    end_date: event.end_date.split('T')[0]
  };

  this.selectedId = event.id;
}
  saveEvent() {
  if (this.selectedId) {
    // UPDATE
    this.eventService.update(this.selectedId, this.newEvent).subscribe(() => {
      this.loadEvents();
      this.resetForm();
    });
  } else {
    // ADD
    this.eventService.create(this.newEvent).subscribe(() => {
      this.loadEvents();
      this.resetForm();
    });
  }
}
registerToEvent(eventId: number) {
  this.registrationService.register(eventId).subscribe({
    next: () => {
      alert('Registered successfully ✅');
    },
    error: () => {
      alert('Already registered ❌');
    }
  });
}
}