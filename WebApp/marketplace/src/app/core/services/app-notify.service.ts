import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {ConfirmModalComponent} from '../shared/components/confirm-modal/confirm-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AppNotifyService {

  modalRef: BsModalRef;

  constructor(private modalDialogService: BsModalService) {
  }

  showConfirmarEnviar(): Promise<any> {
    return this.showComponent({
      title: 'Send offer',
      message: 'are you sure to continue?',
      textAltButtonNo: 'Cancel'
    });
  }
  showNotify(title: string, message: string): Promise<any> {
    return this.showComponent({
      title,
      message,
      textAltButtonYes: 'Ok',
      showButtonNo: false
    });
  }

  show(title: string, message?: string, showCancelButton?: boolean, textButtonYes?: string, textButtonNo?: string): Promise<any> {
    return this.showComponent({
      title,
      message,
      showCancelButton,
      textAltButtonYes: textButtonYes,
      textAltButtonNo: textButtonNo
    });
  }
  private showComponent(initialState: any): Promise<any> {
    this.modalRef = this.modalDialogService.show(ConfirmModalComponent, {
      initialState
    });
    return new Promise((resolve) => {
      this.modalRef?.content.onClose.subscribe((result: any) => {
        resolve(result);
      })
    });
  }
}
