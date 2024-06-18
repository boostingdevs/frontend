import { TestBed } from '@angular/core/testing';

import { ChallengeResolverService } from './challenge-resolver.service';

describe('ChallengeResolverService', () => {
  let service: ChallengeResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChallengeResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
