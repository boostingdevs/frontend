import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { MenuMobileService } from '../menu-mobile/services/menu-mobile.service';
import { AuthService } from '../../services/auth.service';
import { ProgressBarService } from '../../services/progress-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  menuMobileService = inject(MenuMobileService);
  authService = inject(AuthService);
  progressBarService = inject(ProgressBarService);

  public progressBarState = false;

  private route = inject(Router);

  ngOnInit(): void {  
    this.progressBarService.progressBarState.subscribe((value) => {
      this.progressBarState = value
    });
  }

  loginWithGitHub(): void {
  }

  openMenuMobile(): void {
    this.menuMobileService.openMenuMobile();
  }

  /**
   * Navigate to somewhere
   * @param route 
   */
  navigate(route: string) {
    this.progressBarService.progressBarState.next(true);
    this.route.navigate([route]).finally(() =>
      this.progressBarService.progressBarState.next(false)
    )
  }
  
}
