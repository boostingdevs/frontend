import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
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
        NgOptimizedImage
    ]
})
export class ChallengesModule { }
