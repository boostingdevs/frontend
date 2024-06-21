import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { MenuMobileService } from '../menu-mobile/services/menu-mobile.service';
import { AuthService } from '../../services/auth.service';
import { ProgressBarService } from '../../services/progress-bar.service';

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

  ngOnInit(): void {  
    this.progressBarService.progressBarState.subscribe((value) => this.progressBarState = value);
  }

  loginWithGitHub(): void {
  }

  openMenuMobile(): void {
    this.menuMobileService.openMenuMobile();
  }
}
