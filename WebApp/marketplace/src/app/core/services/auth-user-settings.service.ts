import {Injectable} from '@angular/core';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {IAuthUser} from '../models/auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthUserSettingsService {

  public get UserName(): string {
    const data = this.getUserData();
    if (isNotNullOrUndefined(data)) {
      return data.Nombres;
    }
    return '';
  }

  getUserData(): IAuthUser {
    const user: IAuthUser = JSON.parse(localStorage.getItem('CurrentUserRosen'));
    if (user != null) {
      return user;
    }
    return null;
  }
}
