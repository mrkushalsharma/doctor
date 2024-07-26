import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api-service/ApiService';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  processing: Boolean = false;
  error: Boolean = false;
  contactForm: FormGroup;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  handleLoginError() {
    this.processing = false;
    this.error = true;
  }

  onSubmitButtonClicked() {
    this.error = false;
    this.processing = false;
    if (this.contactForm.valid) {
      this.formSubmit();
    }
  }

  formSubmit() {
    this.processing = true;
    this.apiService.contact(this.contactForm.value).then(
      data => {
        console.log(data)
        if (data) {
          this.processing = false;
          this.error = false;
          this.contactForm.reset();
          alert("Contact us added Successfully. Thank You");
        } else {
          this.handleLoginError();
        }
      },
      err => {
        this.handleLoginError();
      });
  }

}
