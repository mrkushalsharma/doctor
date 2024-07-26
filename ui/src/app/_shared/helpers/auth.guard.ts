import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ApiService } from '../../api-service/ApiService';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private apiService: ApiService,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // this wil only check if there's a token
        // this doesn't means that the token is valid!
        // optionally you can also validate the token on the server
        // each time this guard is invoked
        // but that ofcourse could be a lot of calls
        if (this.apiService.hasToken()) {
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/admin/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
