import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { renderTemplate } from "@angular/core/src/render3/instructions";
//http://jasonwatmore.com/post/2018/05/23/angular-6-jwt-authentication-example-tutorial#authentication-service-ts
@Injectable()
export class AuthService implements CanActivate{
    public token: string;
    public user;

    constructor(private router: Router){}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
            this.token = localStorage.getItem("identityToken");
            this.user = JSON.parse(localStorage.getItem("identityToken"));
            if(!this.token)
            {
                //TODO
                //this.router.navigate(['/home']);
                return true;
            }
        return true;
      }
}