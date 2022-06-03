import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.indexOf('authentication') === -1 &&
      request.url.indexOf('assets') === -1) {
      const currentUser = JSON.parse(localStorage.getItem('CurrentUserRosen'));
      if (currentUser && currentUser.Token && currentUser.Token.Value) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.Token.Value}`
          }
        });
      }
    }
    return next.handle(request);
  }
}
