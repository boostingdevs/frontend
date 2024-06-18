import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() textP: string = "";
  @Input() textH1: string = "";
  @Input() textH1Color: string = "";

  private router = inject(Router);

  /**
   * Start project button
   */
  @Input() startProjectButton = false;

  private httpClient = inject(HttpClient);

  readonly DISCORD_INVITATION = 'https://discord.gg/2Zj4sVgu';

  public navigateToChallenges(): void {
    this.router.navigate(['/challenges']);
  }
}
