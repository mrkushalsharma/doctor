import { Component } from '@angular/core';
import { ApiService } from '../api-service/ApiService';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckRequiredField } from '../_shared/helpers/form.helpers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  processing: Boolean = false;
  error: Boolean = false;

  checkField = CheckRequiredField;

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.apiService.hasToken()) {
      this.handleLoginSuccess();
    }
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  handleLoginError() {
    this.processing = false;
    this.error = true;
  }

  handleLoginSuccess() {
    this.processing = false;
    this.error = false;
    this.router.navigate(['/admin']);
  }

  onSubmitButtonClicked() {
    this.error = false;
    this.processing = false;
    if (this.loginForm.valid) {
      this.login();
    }
  }

  login() {
    this.processing = true;
    setTimeout(() => {
      this.apiService.login(this.loginForm.value).then(
        data => {
          if (data) {
            this.handleLoginSuccess();
          } else {
            this.handleLoginError();
          }
        },
        err => {
          this.handleLoginError();
        });
    }, 1000);

  }

}
