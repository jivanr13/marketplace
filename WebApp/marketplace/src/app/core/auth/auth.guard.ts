import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthUserSettingsService} from '../services/auth-user-settings.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {Routes} from '../../data/routes/routes';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authUserSettingsService: AuthUserSettingsService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (isNotNullOrUndefined(this.authUserSettingsService.getUserData())) {
      return true;
    } else {
      this.router.navigate([`/${Routes.LOGIN}`]);
      return false;
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.canActivate(route, state);
  }


}
