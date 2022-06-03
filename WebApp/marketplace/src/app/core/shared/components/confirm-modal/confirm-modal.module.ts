import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ConfirmModalComponent} from './confirm-modal.component';

@NgModule({
  declarations: [
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [ConfirmModalComponent]
})
export class ConfirmModalModule { }
