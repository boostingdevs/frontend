import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMobileComponent } from './menu-mobile.component';



@NgModule({
  declarations: [MenuMobileComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuMobileComponent]
})
export class MenuMobileModule { }
