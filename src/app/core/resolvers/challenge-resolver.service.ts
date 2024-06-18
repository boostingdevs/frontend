import { inject } from '@angular/core';
import { Challenge } from '../types/challenge/challenge.model';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ChallengesService } from '../services/challenges.service';

export const challengeResolver: ResolveFn<Challenge> = (  route: ActivatedRouteSnapshot,  state: RouterStateSnapshot,) => {  return inject(ChallengesService).getChallengeById(route.params['id'])};
