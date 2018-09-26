import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private _auth: RegistrationService) { }

  ngOnInit() {
  }

}
