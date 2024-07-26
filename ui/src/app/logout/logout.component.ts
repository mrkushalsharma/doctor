import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service/ApiService';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.logout();
  }

}
