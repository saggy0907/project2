import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { RegistrationService } from './registration.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { FacultyComponent } from './faculty/faculty.component';
import { HodComponent } from './hod/hod.component';
import { StudentAttndcComponent } from './student-attndc/student-attndc.component';
import { StudentMarkComponent } from './student-mark/student-mark.component';
import { StudentPerformanceComponent } from './student-performance/student-performance.component';
import { StudentFeeComponent } from './student-fee/student-fee.component';
import { EmpSalaryComponent } from './emp-salary/emp-salary.component';
import { DefaultComponent } from './default/default.component';
import { PerformanceComponent } from './performance/performance.component';
import { LibraryComponent } from './library/library.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PayslipComponent } from './payslip/payslip.component';
import { AssignmentComponent } from './assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    StudentsComponent,
    FacultyComponent,
    HodComponent,
    StudentAttndcComponent,
    StudentMarkComponent,
    StudentPerformanceComponent,
    StudentFeeComponent,
    EmpSalaryComponent,
    DefaultComponent,
    PerformanceComponent,
    LibraryComponent,
    InvoiceComponent,
    PayslipComponent,
    AssignmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RegistrationService,AuthGuard,LoginComponent,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
