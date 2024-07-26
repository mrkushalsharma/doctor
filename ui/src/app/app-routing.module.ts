import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_shared/helpers/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './_shared/ui/layout/layout.component';
import { AdminLayoutComponent } from './_shared/admin-ui/admin-layout/admin-layout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'team', component: TeamComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
      { path: 'inquiry', component: ContactUsComponent, canActivate: [AuthGuard]},
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
