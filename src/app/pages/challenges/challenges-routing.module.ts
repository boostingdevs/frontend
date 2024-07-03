import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengesComponent } from './challenges.component';
import { challengesResolver } from '../../core/resolvers/challenges-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ChallengesComponent,
    resolve: {
      challenges: challengesResolver
    }
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChallengesRoutingModule { }
