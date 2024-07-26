import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  datas: any = [];

  constructor(private http: HttpClient
  ) {
  }
  ngOnInit() {
    this.http.get(environment['apiBaseUrl'] + 'appointments').subscribe((response: any) => {
      if (response && response?.success) {
        this.datas = response.datas;
      } else {
        alert(response.message ?? "Error occurred while fetching data");
      }

    }, err => {
      console.log(err)
    })
  }
}
