import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from './registration.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _auth:RegistrationService, private router:Router) { }
  canActivate(): Observable<boolean> | boolean {
    console.log(this._auth.logedIn());
    if(this._auth.logedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
