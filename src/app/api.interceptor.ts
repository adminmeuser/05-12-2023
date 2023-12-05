import { Injectable } from '@angular/core';
import { HttpInterceptorFn, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError,  map, of  } from 'rxjs';
import { ProgressService } from './progress.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private progressService: ProgressService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ):any {
   
    console.log(req);
    console.log('sending');
    const urlDomain = "https://restcountries.com/";
    const token = 'Interceptors'; 
    const reqnew1 = req.clone({
      url:urlDomain+ req?.url,
      setHeaders:{'Auth-headers':token}

    })
    console.log(reqnew1);
    return next.handle(reqnew1).pipe(map((event:HttpEvent<any>)=>{
      console.log(event)
      if(event instanceof HttpResponse) {
        console.log(event, 'Getting')
      }
      return event;
    }), catchError((err:any)=>{
      console.log('api failed');
      if (err instanceof HttpErrorResponse) {
        console.log('failed', err);
        if (err.status === 401) {
          console.log('Unauthorized');
        }
      }
      return of('Default value or re-throw the error');
    }));
}
}
