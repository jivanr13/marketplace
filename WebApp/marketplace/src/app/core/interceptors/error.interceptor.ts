import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {Router} from '@angular/router';
import {AppNotifyService} from '../services/app-notify.service';
import {BlockUIService} from '../services/block-ui.service';
import {Routes} from '../../data/routes/routes';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private appNotifyService: AppNotifyService,
              private blockUIService: BlockUIService,
              private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      const customError = {
        statusCode: err.status,
        data: '',
      };
      console.log(err);
      if (err.error) {
        if (isNotNullOrUndefined(err.error.message)) {
          customError.data = err.error.message;
        }
        if (isNotNullOrUndefined(err.error)) {
          customError.data += (isNotNullOrUndefined(customError.data) && customError.data.trim() !== '' ? '. ' : '')
            + err.error;
        }
      } else {
        customError.data = err.message;
      }
      if (err.status === 401) {
        localStorage.clear();
        this.router.navigateByUrl(`/${Routes.LOGIN}`);
      } else {
        this.blockUIService.endBlock();
        this.appNotifyService.showNotify('Error', customError.data);
      }
      return throwError(customError);
    }));
  }
}
