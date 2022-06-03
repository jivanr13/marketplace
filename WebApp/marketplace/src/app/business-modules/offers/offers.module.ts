import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OfferItemComponent} from './offer-item/offer-item.component';
import {OfferCreationComponent} from './offer-creation/offer-creation.component';
import {OfferListComponent} from './offer-list/offer-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../core/auth/auth.guard';
import {SharedModule} from '../../core/shared/shared.module';
import {PagginatorModule} from '../../core/shared/components/pagginator/pagginator.module';


const routes: Routes = [
  { path: 'new', component: OfferCreationComponent, canActivate: [AuthGuard] },
  { path: 'list', component: OfferListComponent, canActivate: [AuthGuard] },
  {path: '', redirectTo: 'list'},
];

@NgModule({
  declarations: [OfferItemComponent, OfferCreationComponent, OfferListComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    PagginatorModule
  ]
})
export class OffersModule { }
