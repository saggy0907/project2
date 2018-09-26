import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // getUserName: any;
  // [x: string]: any;
  private registerData ={ };

  constructor(public _auth: RegistrationService, private _router:Router) { }

  ngOnInit() {
  }
  registerUser() {
    this._auth.registerUser(this.registerData)
      .subscribe(
        res => {
          alert("New user Created Successfully...!!!");
          this._router.navigate(['/login']);

        },err => {
          alert("user is Already there...!!!");

        }

      );
  }
}
