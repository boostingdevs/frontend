import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  /**
   * Optional text
   */
  public text = '';

  /**
   * Show alert success
   */
  showSuccess(text?: string): void {
    const alert = document.querySelector("[alert-type='success']") as HTMLDivElement;
    alert.classList.toggle('show');

    setTimeout(() => {
      alert.classList.toggle('show');
    }, 3500);

    if(text) {
      (document.querySelector(".alert__text") as HTMLDivElement).innerHTML = text;
    }
  }
}