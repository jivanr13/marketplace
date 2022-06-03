import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BlockUIService} from '../../core/services/block-ui.service';
import {IAuthUser} from '../../core/models/auth-user';
import {AuthUserSettingsService} from '../../core/services/auth-user-settings.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {Routes} from '../../data/routes/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private blockUIService: BlockUIService,
              private authUserSettingsService: AuthUserSettingsService) {
    if (isNotNullOrUndefined(this.authUserSettingsService.getUserData())) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [this.authUserSettingsService.UserName, Validators.required]
    });
  }

  submitForm() {
    for (const c in this.loginForm.controls)
      this.loginForm.controls[c].markAsTouched();

    if (this.loginForm.valid) {
      const user: IAuthUser = {
        Nombres: this.loginForm.get('userName').value,
        Token: {
          Value: 'OASOASASASAIJSIAJSJIAJS'
        }
      };
      localStorage.setItem('CurrentUserRosen', JSON.stringify(user));
      this.router.navigate([`/${Routes.OFFERS.LIST}`]);
    }
  }
}
