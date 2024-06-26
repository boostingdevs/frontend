import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { StackComponent } from './components/stack/stack.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroModule } from "../../core/components/hero/hero.module";
import { AlertComponent } from '../../core/components/alert/alert.component';

@NgModule({
    declarations: [HomeComponent, StackComponent, NewsletterComponent, AlertComponent],
    exports: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HttpClientModule,
        HeroModule
    ]
})
export class HomeModule { }
