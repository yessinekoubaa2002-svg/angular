import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   email: string = '';
  password: string = '';

  constructor(private http: HttpClient , private router: Router) {}

  login() {
    this.http.post('http://127.0.0.1:8000/api/login', {
      email: this.email,
      password: this.password
    }).subscribe((res: any) => {
      console.log(res);

      // 💾 نخزنو token
      localStorage.setItem('token', res.token);
      localStorage.setItem('role', res.user.role);
    });
    this.router.navigate(['/events']);
  }
  
  

}
