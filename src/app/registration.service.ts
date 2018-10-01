import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  RequestOptions, Headers } from '@angular/http';
// import 'rxjs/add/operaator/map';
import { Router } from '@angular/router';

@Injectable()
export class RegistrationService {

  registerUrl = 'http://localhost:9080/user/registration';
  loginUrl = 'http://localhost:9080/user/login';
  // public roleA=<any>[];

  public roleA=[];
  constructor(private http: HttpClient, public _router: Router) { }
  registerUser(user) {
    // const role1 = user.role;
    var rol=[];
    if(user.role1==true){rol.push("admin")}
    if(user.role2==true){rol.push("principal")}
    if(user.role3==true){rol.push("hod")}
    if(user.role4==true){rol.push("faculty")}
    if(user.role5==true){rol.push("accountant")}
    user.role=rol;
    return this.http.post<any>(this.registerUrl, user);
  }
  loginUser(user) {
  //   if(this.getUserName()!=null){
  //   this.roleA=this.getUserName().split(",");
  //   console.log("hello")
  // }
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
    return localStorage.getItem('username');
  }
  // getRole1() {
  //   return localStorage.getItem('username');
  // }
  // getRole2() {
  //   return localStorage.getItem('username');
  // }
  // getRole3() {
  //   return localStorage.getItem('username');
  // }
  // getRole4() {
  //   return localStorage.getItem('username');
  // }
  // getRole5() {
  //   return localStorage.getItem('username');
  // }
  logOutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    // localStorage.clear();
    // window.location.reload();
    this._router.navigate(['/login']);
    return this.roleMatch(null);
  }

 roleMatch(allowedRole){
      var isMatch=false;
      // console.log("service roles=",this.roleA)
      // console.log("service roles=",this.rol)

      var userRoles = this.getUserName();
      // console.log("service roles=123",userRoles)
    if (userRoles!=null && this.logedIn()) {
      this.roleA=userRoles.split(",")
      // console.log("service roles=",this.roleA)
    }
     if(allowedRole!=null){
      allowedRole.forEach(element=>{
        for (let i = 0; i < this.roleA.length; i++) {
          if (element==this.roleA[i]) {
            isMatch=true;
            return false
          }
        }
      })
    }
      return isMatch;
  }

  getUserName(){
    return localStorage.getItem('role');
  }
  getUserName1(){
    return this.roleA[0];
  }
  getUserName2(){
    return this.roleA[1];
  }
  getUserName3(){
    return this.roleA[2];
  }
  getUserName4(){
    return this.roleA[3];
  }
  getUserName5(){
    return this.roleA[4];
  }

}
