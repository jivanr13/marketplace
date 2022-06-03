import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from '../layout/layout.component';
import {AuthGuard} from '../core/auth/auth.guard';
import {LayoutModule} from '../layout/layout.module';
import {MarketplaceApiService} from '../core/marketplace-api/marketplace-api.service';
import {PagginatorModule} from '../core/shared/components/pagginator/pagginator.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'offers', loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule) },
      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    PagginatorModule
  ],
  providers: [MarketplaceApiService],
  declarations: [
    HomeComponent,
  ]
})
export class BusinessModulesModule {
}
