import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api-service/ApiService';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss'
})
export class AdminHeaderComponent implements OnInit{

  navToggle: Boolean = false;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.apiService.logout();
  }

  toggleNav() {
    this.navToggle  = !this.navToggle;
  }

}
