import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './features/auth/components/register/register.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { DashboardComponent } from './features/client/pages/dashboard/dashboard.component';
import { LoginComponent } from './features/auth/components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {title: 'Login - JDG Trading', path: 'auth/login', component: LoginComponent, },
  {title: 'Register - JDG Trading', path: 'auth/register', component: RegisterComponent, },
  { title: 'JDG Trading', path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { title: 'JDG Trading', path: 'client', component: DashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
