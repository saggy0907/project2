import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  RequestOptions, Headers } from '@angular/http';
// import 'rxjs/add/operaator/map';
import { Router } from '@angular/router';

@Injectable()
export class RegistrationService {

  registerUrl = 'http://sagar-practice.us.openode.io/user/registration';
  loginUrl = 'http://sagar-practice.us.openode.io/user/login';
  constructor(private http: HttpClient, public _router: Router) { }
  registerUser(user) {
    const role1 = user.role;
    return this.http.post<any>(this.registerUrl, user);
  }
  loginUser(user) {
    return this.http.post<any>(this.loginUrl, user);
  }
  getUser() {
    return this.http.get<any>(this.loginUrl+'/one');
  }
  logedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  getRole() {
    return localStorage.getItem('role');
  }
  logOutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    // localStorage.clear();
    this._router.navigate(['/login']);
  }

 roleMatch(allowedRole){
      var isMatch=false;
      var userRoles = this.getRole();
      allowedRole.forEach(element=>{
        if (element==userRoles) {
            isMatch=true;
            return false
        }
      })
      return isMatch;
  }

  getUserName(){
    return localStorage.getItem('role');
  }


}
