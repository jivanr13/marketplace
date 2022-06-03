import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  public onClose!: Subject<boolean>;
  title!: string;
  message!: string;
  textButtonYes = 'Yes';
  textButtonNo = 'No';

  textAltButtonYes!: string;
  textAltButtonNo!: string;

  showButtonNo = true;

  constructor(public bsModalRef: BsModalRef) { }

  public ngOnInit(): void {
    if (this.textAltButtonYes != null) {
      this.textButtonYes = this.textAltButtonYes;
    }
    if (this.textAltButtonNo != null) {
      this.textButtonNo = this.textAltButtonNo;
    }
    this.onClose = new Subject();
  }

  public onConfirm(): void {
    this.onClose.next(true);
    this.bsModalRef.hide();
  }

  public onCancel(): void {
    this.onClose.next(false);
    this.bsModalRef.hide();
  }
}
