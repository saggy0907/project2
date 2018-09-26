import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HodComponent } from './hod/hod.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentFeeComponent } from './student-fee/student-fee.component';
import { StudentPerformanceComponent } from './student-performance/student-performance.component';
import { StudentMarkComponent } from './student-mark/student-mark.component';
import { StudentAttndcComponent } from './student-attndc/student-attndc.component';
import { EmpSalaryComponent } from './emp-salary/emp-salary.component';
import { RegistrationService } from './registration.service';
import { DefaultComponent } from './default/default.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PayslipComponent } from './payslip/payslip.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { LibraryComponent } from './library/library.component';


export const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch:'full'
  },
  {
    path:'accountant/students',
    component:StudentsComponent
  },
  {
    path:'faculty/students',
    component:StudentsComponent
  },
  {
    path:'principal/students',
    component:StudentsComponent
  },
  {
    path:'hod/students',
    component:StudentsComponent
  },
  {
    path:'admin/students',
    component:StudentsComponent
  },
  {
    path:'registration',
    component:RegistrationComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin/hod',
    component:HodComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'principal/hod',
    component:HodComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/faculty',
    component:FacultyComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'principal/faculty',
    component:FacultyComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'hod/faculty',
    component:FacultyComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'accountant/faculty',
    component:FacultyComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'accountant/create_invoice',
    component:InvoiceComponent
  },
  {
    path:'admin/student_fee',
    component:StudentFeeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/student_performance',
    component:StudentPerformanceComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'principal/student_performance',
    component:StudentPerformanceComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'hod/student_performance',
    component:StudentPerformanceComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'faculty/student_performance',
    component:StudentPerformanceComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'accountant/genrate_payslip',
    component:PayslipComponent
  },
  {
    path:'hod/student_mark',
    component:StudentMarkComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'faculty/student_attandance',
    component:StudentAttndcComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'hod/student_attandance',
    component:StudentAttndcComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'admin/employee_salary',
    component:EmpSalaryComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'faculty/assignment',
    component:AssignmentComponent,
    canActivate:[AuthGuard]
  },{
    path:'faculty/library',
    component:LibraryComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
