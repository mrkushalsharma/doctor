import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApiService } from '../../../api-service/ApiService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent implements OnInit, OnDestroy{
  loggedIn$: BehaviorSubject<boolean>;
  private isLoggedIn_subscription: Subscription;

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loggedIn$ = this.apiService.isLoggedIn;
    this.isLoggedIn_subscription = this.apiService.isLoggedIn.subscribe(
      (status) => {
        if (status) {
          // this.handleLoginSuccess();
        } else {
          this.handleLoginError();
        }
      }
    );

  }

  ngOnDestroy() {
    if (this.isLoggedIn_subscription) { this.isLoggedIn_subscription.unsubscribe(); }
  }
  private handleLoginError() {
    this.router.navigate(['/admin/login']);
  }

  private handleLoginSuccess() {
  }
}
