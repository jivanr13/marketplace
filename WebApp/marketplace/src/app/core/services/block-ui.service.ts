import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlockUIService {
  @Output() changeStatus: EventEmitter<{ status: boolean; message: string; }> = new EventEmitter();

  startBlock(message: string = '') {
    this.changeStatus.emit({
      status: true,
      message
    });
  }

  endBlock() {
      this.changeStatus.emit({
        status: false,
        message: ''
      });
  }
}
