import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagginatorComponent} from './pagginator.component';
import {SharedModule} from '../../shared.module';

@NgModule({
  declarations: [
    PagginatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [PagginatorComponent]
})
export class PagginatorModule { }
