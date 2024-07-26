import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckRequiredField } from '../_shared/helpers/form.helpers';
import { ApiService } from '../api-service/ApiService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  processing: Boolean = false;
  error: Boolean = false;
  appointmentForm: FormGroup;
  checkField = CheckRequiredField;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.appointmentForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', Validators.required),
      services: new FormControl('', Validators.required),
      doctorName: new FormControl('', Validators.required),
      appointmentDate: new FormControl('', Validators.required),
      appointmentTime: new FormControl('', Validators.required),
    });
  }

  handleLoginError() {
    this.processing = false;
    this.error = true;
  }

  onSubmitButtonClicked() {
    this.error = false;
    this.processing = false;
    if (this.appointmentForm.valid) {
      this.formSubmit();
    }
  }

  formSubmit() {
    this.processing = true;
    this.apiService.bookAppointment(this.appointmentForm.value).then(
      data => {
        console.log(data)
        if (data) {
          this.processing = false;
          this.error = false;
          this.appointmentForm.reset();
          alert("Appointment Booked Successfully. Thank You");
        } else {
          this.handleLoginError();
        }
      },
      err => {
        this.handleLoginError();
      });
  }

}
