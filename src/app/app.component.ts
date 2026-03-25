import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetFrontend';
  logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('role');

  window.location.reload();
}
get isLoggedIn() {
  return !!localStorage.getItem('token');
}
}
