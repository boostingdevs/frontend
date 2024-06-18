import { Component, OnInit, inject } from '@angular/core';
import { MenuMobileService } from '../menu-mobile/services/menu-mobile.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  menuMobileService = inject(MenuMobileService);
  authService = inject(AuthService)

  ngOnInit(): void {

  }

  loginWithGitHub(): void {
  }

  openMenuMobile(): void {
    this.menuMobileService.openMenuMobile();
  }
}
