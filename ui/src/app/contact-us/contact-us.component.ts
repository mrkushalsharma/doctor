import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service/ApiService';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  datas: any = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(environment['apiBaseUrl'] + 'contact').subscribe((response: any) => {
      if (response && response?.success) {
        this.datas = response.datas;
      }else{
        alert(response.message ?? "Error occurred while fetching data" );
      }

    }, err => {
      console.log(err)
    })
  }
}
