import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { RegistrationService } from './registration.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector:Injector) { }
  intercept(req,next){
    let _authService=this._injector.get(RegistrationService);

    let tokenizedReq= req.clone({
    setHeaders:{
      'x-access-token':`${_authService.getToken()}`
    }
  });
  // console.log("tokenizedReq=",tokenizedReq);
  return next.handle(tokenizedReq)
  }
}
