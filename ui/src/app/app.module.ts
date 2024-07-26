import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './_shared/ui/ui.module';
import { ApiService } from './api-service/ApiService';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_shared/helpers/auth.guard';
import { AdminUiModule } from './_shared/admin-ui/admin-ui.module';
import { LogoutComponent } from './logout/logout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    DashboardComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    UiModule,
    AppRoutingModule,
    AdminUiModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'},
    AuthGuard,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
