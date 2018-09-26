import { Component } from '@angular/core';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user={};
  // public logUser:LoginComponent;
  constructor(private _authService:RegistrationService, public _router:Router,public loged:LoginComponent){}

  // private user = this.logUser.user;
//   OnInit(){
//   if(!this._authService.logedIn()){
//     this._authService.getUser()
//     .subscribe(
//      res=>this.user=res,
//      err=>{
//        if(err.status==401||err.status==500){
//          this._router.navigate(['/login'])
//        }
//      })
//      console.log("new logged user=" ,this.user);
//   }else{console.log("not done")}
//
// }

}
