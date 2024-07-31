import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressBarService } from '../../services/progress-bar.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() textP: string = "";
  @Input() textH1: string = "";
  @Input() textH1Color: string = "";

  private progressBarService = inject(ProgressBarService);

  private router = inject(Router);

  /**
   * Start project button
   */
  @Input() startProjectButton = false;

  /**
   * Contribute button
   */
  @Input() contributeButton = false;

  readonly DISCORD_INVITATION = 'https://discord.gg/nuhkGQRqSb';

  public navigateToChallenges(): void {
    this.progressBarService.progressBarState.next(true);
    this.router.navigate(['/challenges']).finally(() => {
      this.progressBarService.progressBarState.next(false);
    })
  }

  public navigateToApoiase(): void {
    this.progressBarService.progressBarState.next(true);
    this.router.navigate(['/contribute']).finally(() => {
      this.progressBarService.progressBarState.next(false);
    })
  }
}
