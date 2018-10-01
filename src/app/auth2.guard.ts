import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {

  public value1=[];
  public value2=["admin","principal","hod","faculty","accountant",]
  constructor(private _auth:RegistrationService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    console.log(this._auth.logedIn());

    if(this._auth.logedIn()){
      this.value1=this._auth.getUserName().split(",")
    // if(this.value1.length > 1){}
      for(let i=0;i<this.value1.length;i++){
      for(let j=0;j<this.value2.length;j++){
      if ( this.value2[j]==this.value1[i]) {
        // if ( this.value2.indexOf(this.value1[i]) > -1) {
        console.log("value1==",this.value1)
      console.log("hi")
      return true;
    }
    // else{continue;}
    // if(this.value1.length > 1) { continue;}
      // // this._auth.logOutUser();
      // // this.router.navigate(['/login']);
      // return false;

   }
}
    }else{
      console.log("bye2")
      this._auth.logOutUser();
      this.router.navigate(['/login']);
      return false;
    }
  }
}
