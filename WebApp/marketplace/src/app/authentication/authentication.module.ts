import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {LayoutLoginComponent} from './layout-login/layout-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FooterModule} from '../layout/footer/footer.module';



@NgModule({
  declarations: [
    LoginComponent,
    LayoutLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FooterModule
  ]
})
export class AuthenticationModule { }
