import { ModuleWithProviders, NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const SHARE_MODULES = [
  CommonModule,
  RouterModule,
  ModalModule,
  FormsModule,
  ReactiveFormsModule,
];


const PROVIDERS = [
  BsModalRef,
];

@NgModule({
  imports: [
    ModalModule.forRoot(),
    ...SHARE_MODULES,
  ],
  providers: [
    ...PROVIDERS
  ],
  declarations: [
  ],
  entryComponents: [
  ],
  exports: [
    ...SHARE_MODULES,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    };
  }
}
