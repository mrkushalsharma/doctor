import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

export interface UserModel {
    password?: string;
    email?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    isLoggedIn = new BehaviorSubject(false);
    private token: any = "";

    constructor(
        private http: HttpClient
    ) {
        this.resolveToken();
    }

    // check if localstorage token was set
    // if so, set the token in the service
    // and set the login status
    resolveToken(): boolean {
        this.token = localStorage?.getItem('access_token');
        this.isLoggedIn.next(this.token ? true : false);
        return this.token ? true : false;
    }

    getToken(): string {
        return this.token;
    }

    hasToken(): boolean {
        return this.getToken() ? true : false;
    }

    async logout() {
        this.clearData();
        this.isLoggedIn.next(false);
        return true;
    }

    async login({ email, password }: UserModel): Promise<any> {
        // clear some data
        this.clearData();
        if (email == "admin@gmail.com" && password == "admin") {
            this.setDataAfterLogin("LoggedInToken");
            this.isLoggedIn.next(true); // how do I unit test this?

            return true;
        } else {
            return false;
        }
    }

    clearData() {
        this.token = "";
        localStorage.clear();
    }

    private setDataAfterLogin(data: any) {
        this.token = data;
        // store some data in local storage (webbrowser)
        localStorage.setItem('access_token', this.token);
    }

    async bookAppointment(form: any): Promise<any> {
        const data: any = await this.http.post(environment['apiBaseUrl'] + 'book-appointment', form).toPromise();
        if (data && data.success) {
            return true;
        } else {
            return false;
        }
    }

    async contact(form: any): Promise<any> {
        const data: any = await this.http.post(environment['apiBaseUrl'] + 'contact', form).toPromise();
        if (data && data.success) {
            return true;
        } else {
            return false;
        }
    }

}
