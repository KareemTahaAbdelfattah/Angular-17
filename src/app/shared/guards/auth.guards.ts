import { Inject, Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(private Activatedroute: ActivatedRoute, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> | boolean | UrlTree {
        const token = localStorage.getItem('token');
        return token ? true: this.router.navigateByUrl('/account/login');
    }
}