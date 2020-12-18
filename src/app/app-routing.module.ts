import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingboardComponent } from './landingboard/landingboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers';


const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'landing', component: LandingboardComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: 'landing' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
