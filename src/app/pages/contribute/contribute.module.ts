import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributeComponent } from './contribute.component';
import { ContributeRoutingModule } from './contribute-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroModule } from '../../core/components/hero/hero.module';

@NgModule({
  declarations: [ContributeComponent],
  imports: [
    CommonModule,
    ContributeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeroModule
  ],
  exports: [ContributeComponent]
})
export class ContributeModule { }
