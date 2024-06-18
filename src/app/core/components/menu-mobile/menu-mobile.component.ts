import { Component, inject } from '@angular/core';
import { MenuMobileService } from './services/menu-mobile.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {
  menuMobileService = inject(MenuMobileService);

  authService = inject(AuthService)

  loginWithGitHub(): void {
    this.authService.signInWithGitHub();
  }
}
