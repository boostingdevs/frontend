import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'challenges',
      loadChildren: () => import('./pages/challenges/challenges.module').then(m => m.ChallengesModule)
    },
    {
      path: 'challenge/:id',
      loadChildren: () => import('./pages/challenge/challenge.module').then(m => m.ChallengeModule)
    },
    {
      path: 'contribute',
      loadChildren: () => import('./pages/contribute/contribute.module').then(m => m.ContributeModule)
    },
    {
      path: '**',
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    }
];
