import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { HeaderModule } from './core/components/header/header.module';
import { FooterModule } from './core/components/footer/footer.module';
import { MenuMobileModule } from './core/components/menu-mobile/menu-mobile.module';
import { HeroModule } from './core/components/hero/hero.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderModule, HomeModule, FooterModule, MenuMobileModule, HeroModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
