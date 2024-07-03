import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  showSuccess(): void {
    const alert = document.querySelector("[alert-type='success']") as HTMLDivElement
    alert.classList.toggle('show');

    setTimeout(() => {
      alert.classList.toggle('show');
    }, 4000);
  }
}
