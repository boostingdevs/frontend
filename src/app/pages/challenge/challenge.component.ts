import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ChallengesService } from '../../core/services/challenges.service';
import { ActivatedRoute } from '@angular/router';
import { Challenge } from '../../core/types/challenge/challenge.model';


@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChallengeComponent {  
  /**
   * Challenges Service DI
   */
  private challengesService = inject(ChallengesService)

  /**
   * Challenges Service DI
   */
  private activatedRoute = inject(ActivatedRoute)

  public challenge!: Challenge;

  readonly DISCORD_INVITATION = 'https://discord.gg/2Zj4sVgu';

  ngOnInit(): void {
    this.activatedRoute.data
    .subscribe(({ challenge }) => {
      this.challenge = challenge;
    });
  }

  public changeCheckboxStatus(element: Event): void {
    const filterButton = element?.target as HTMLDivElement;

    filterButton.classList.toggle('active');
  }

  public openLink(link: string): void {
    window.open(link, "_blank")
  }
}
