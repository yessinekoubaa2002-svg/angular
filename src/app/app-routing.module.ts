import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyRegistrationsComponent } from './my-registrations/my-registrations.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: 'events',
    component: EventsComponent,
    canActivate: [AuthGuard] // 🔐 هنا الحماية
  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'my-registrations', component: MyRegistrationsComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}