import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuMobileService {
  /**
   * opened
   */
  opened = false;

  /**
   * Open menu mobile
   */
  openMenuMobile(): void {
    this.opened = !this.opened;

    this.changeBodyTagElementOverflowProperty();
  }

  /**
   * Change body tag element overflow property
   */
  changeBodyTagElementOverflowProperty(): void {
    const bodyTag = document.querySelector('body') as HTMLElement;
    bodyTag.style.overflow == 'hidden' ? bodyTag.style.overflow = 'auto' : bodyTag.style.overflow = 'hidden';
  }
}
