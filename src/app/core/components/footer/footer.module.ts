import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AlertComponent } from '../alert/alert.component';



@NgModule({
  declarations: [FooterComponent, AlertComponent],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
