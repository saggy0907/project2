import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from './registration.service';

@Injectable()
export class AuthGuard implements CanActivate {
  public value1=[];
  public value2=["admin","principal","hod","faculty","accountant",]
  constructor(private _auth:RegistrationService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    // console.log(this._auth.logedIn());

    if(this._auth.logedIn()){
      this.value1=this._auth.getUserName().split(",")
if (this.value1.length <=1) {
    for(let i=0;i<this.value1.length;i++){
  // for(let j=0;j<this.value2.length;j++){
      if ( route.data['role']==this.value1[i]) {
        // if ( this.value1.indexOf(route.data['role']) > -1) {
        console.log("Hi")
      return true;
    }
     else{
       this._auth.logOutUser();
       return true;
     }
  }
}else{
  for(let i=0;i<this.value1.length;i++){

    if ( route.data['role']==this.value1[i]) {
  return true;
}else{
  this._auth.logOutUser();
  this.router.navigate(['/login']);
  return false;
}
}
}
}
else{
  console.log("bye2")
  this._auth.logOutUser();
  this.router.navigate(['/login']);
  return false;
}
}
}
