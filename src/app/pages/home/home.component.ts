import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { HeroComponent } from '../../core/components/hero/hero.component';
import { Router } from '@angular/router';
import { ProgressBarService } from '../../core/services/progress-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private router = inject(Router);

  private progressBarService = inject(ProgressBarService);

  readonly DISCORD_INVITATION = 'https://discord.gg/2Zj4sVgu';

  public homeParagrafo: string = "Aprenda programação de verdade com projetos reais.";
  public homeH1: string = "Desenvolva seu portfólio com ";
  public homeH1Color: any = "Projetos Reais"
  
  public navigateToChallenges(): void {
    this.progressBarService.progressBarState.next(true);
    
    this.router.navigate(['/challenges'])
    .finally(() => {
      this.progressBarService.progressBarState.next(false);
    })
  }
}
