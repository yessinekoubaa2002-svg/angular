import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 👈 مهم

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {} // 👈 inject

  get isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  get role() {
    return localStorage.getItem('role');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    this.router.navigate(['/login']); // 👈 تو يخدم
  }

  goLogin() {
    this.router.navigate(['/login']);
  }
}