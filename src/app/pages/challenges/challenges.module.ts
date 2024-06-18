import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesComponent } from './challenges.component';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { HeroModule } from "../../core/components/hero/hero.module";



@NgModule({
    declarations: [ChallengesComponent],
    exports: [ChallengesComponent],
    imports: [
        CommonModule,
        ChallengesRoutingModule,
        HeroModule,
    ]
})
export class ChallengesModule { }
