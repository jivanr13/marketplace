import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {LoginComponent} from './authentication/login/login.component';

export const routes = [
  { path: 'login', component: LoginComponent },

  { path: '', loadChildren: () => import('./business-modules/business-modules.module').then(m => m.BusinessModulesModule) },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
