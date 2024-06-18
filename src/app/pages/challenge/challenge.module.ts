import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { ChallengeComponent } from './challenge.component';
import { HeroModule } from "../../core/components/hero/hero.module";

@NgModule({
    declarations: [ChallengeComponent],
    exports: [ChallengeComponent],
    imports: [
        CommonModule,
        ChallengeRoutingModule,
        HeroModule,
        NgOptimizedImage
    ]
})
export class ChallengeModule { }
