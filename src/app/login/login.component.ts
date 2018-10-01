import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(){ }
  public loginData = <any>{} ;

 public user=this.loginData;
  constructor(public _auth:RegistrationService , public router:Router) {
}

  loginUser(){
    this._auth.loginUser(this.loginData)
    .subscribe(
      res=>{
        this.user=res;
        console.log("response==",this.user);
      localStorage.setItem('token',res.token);
      localStorage.setItem('role',res.role);
      localStorage.setItem('username',res.username);
      alert("Login Successfull");
      console.log("token =",res.token);
      if(this._auth.getUserName()=="admin"){
        console.log("login as admin")
        this.router.navigate(['admin/students']);
      }
if(res.role[0]=="principal"){
  console.log("login as principal")
      this.router.navigate(['principal/students']);
    }
    }, err=>{
        console.log(err);
        // confirm("login not successfull");
        // document.write("Login Declined");
        alert(err.error.msg);
      });
      console.log("login with=",this.loginData);
  }
  // newData=JSON.stringify(this.loginData);

}
