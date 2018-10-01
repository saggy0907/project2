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
import { Auth2Guard } from './auth2.guard';


export const routes: Routes = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch:'full'
  },
  {
    path:'accountant/students',
    component:StudentsComponent,
    canActivate:[AuthGuard],
    data:{role:['accountant']}
  },
  {
    path:'faculty/students',
    component:StudentsComponent,
    canActivate:[AuthGuard],
    data:{role:['faculty']}
  },
  {
    path:'principal/students',
    component:StudentsComponent,
    canActivate:[AuthGuard],
    data:{role:['principal']}
  },
  {
    path:'hod/students',
    component:StudentsComponent,
    canActivate:[AuthGuard],
    data:{role:['hod']}
  },
  {
    path:'admin/students',
    component:StudentsComponent,
    canActivate:[AuthGuard],
    data:{role:['admin']}
  },
  {
    path:'admin/add_user',
    component:RegistrationComponent,
    canActivate:[AuthGuard],
    data:{role:['admin']}
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin/hod',
    component:HodComponent,
    canActivate:[AuthGuard],
    data:{role:['admin']}
  },
  {
    path:'principal/hod',
    component:HodComponent,
    canActivate:[AuthGuard],
    data:{role:['principal']}
  },
  {
    path:'admin/faculty',
    component:FacultyComponent,
    canActivate:[AuthGuard],
    data:{role:['admin']}

  },
  {
    path:'principal/faculty',
    component:FacultyComponent,
    canActivate:[AuthGuard],
    data:{role:['principal']}
  },
  {
    path:'hod/faculty',
    component:FacultyComponent,
    canActivate:[AuthGuard],
    data:{role:['hod']}
  },
  {
    path:'accountant/faculty',
    component:FacultyComponent,
    canActivate:[AuthGuard],
    data:{role:['accountant']}
  },
  {
    path:'accountant/create_invoice',
    component:InvoiceComponent,
    canActivate:[AuthGuard],
    data:{role:['accountant']}
  },
  {
    path:'admin/student_fee',
    component:StudentFeeComponent,
    canActivate:[AuthGuard],
    data:{role:['admin']}
  },
  {
    path:'admin/student_performance',
    component:StudentPerformanceComponent,
    canActivate:[AuthGuard],
    data:{role:['admin']}
  },
  {
    path:'principal/student_performance',
    component:StudentPerformanceComponent,
    canActivate:[AuthGuard],
    data:{role:['principal']}
  },
  {
    path:'hod/student_performance',
    component:StudentPerformanceComponent,
    canActivate:[AuthGuard],
    data:{role:['hod']}
  },
  {
    path:'faculty/student_performance',
    component:StudentPerformanceComponent,
    canActivate:[AuthGuard],
    data:{role:['faculty']}
  },
  {
    path:'accountant/generate_payslip',
    component:PayslipComponent,
    canActivate:[AuthGuard],
    data:{role:['accountant']}
  },
  {
    path:'hod/student_mark',
    component:StudentMarkComponent,
    canActivate:[AuthGuard],
    data:{role:['hod']}
  },
  {
    path:'faculty/student_attandance',
    component:StudentAttndcComponent,
    canActivate:[AuthGuard],
    data:{role:['faculty']}
  },
  {
    path:'hod/student_attandance',
    component:StudentAttndcComponent,
    canActivate:[AuthGuard],
    data:{role:['hod']}
  },
  {
    path:'admin/employee_salary',
    component:EmpSalaryComponent,
    canActivate:[AuthGuard],
    data:{role:['admin']}
  },
  {
    path:'faculty/assignment',
    component:AssignmentComponent,
    canActivate:[AuthGuard],
    data:{role:['faculty']}
  },{
    path:'faculty/library',
    component:LibraryComponent,
    canActivate:[AuthGuard],
    data:{role:['faculty']}
  },{
    path:'principal/assignment',
    component:AssignmentComponent,
    canActivate:[AuthGuard],
    data:{role:['principal']}
  },{
    path:'principal/library',
    component:LibraryComponent,
    canActivate:[AuthGuard],
    data:{role:['principal']}
  },{
    path:'principal/student_attandance',
    component:StudentAttndcComponent,
    canActivate:[AuthGuard],
    data:{role:['principal']}
  },{
    path:'principal/student_mark',
    component:StudentMarkComponent,
    canActivate:[AuthGuard],
    data:{role:['principal']}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
