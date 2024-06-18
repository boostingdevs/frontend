import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeComponent } from './challenge.component';
import { challengeResolver } from '../../core/resolvers/challenge-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ChallengeComponent,
    resolve: {
      challenge: challengeResolver
    }
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChallengeRoutingModule { }
