import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [ // 👈 هنا برا class
  { path: 'login', component: LoginComponent },
  { path: 'events', component: EventsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}