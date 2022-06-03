import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import {FooterModule} from './footer/footer.module';
import {SharedModule} from '../core/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FooterModule,
  ],
  providers: [],
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
  ],
  entryComponents: []
})
export class LayoutModule {
}
