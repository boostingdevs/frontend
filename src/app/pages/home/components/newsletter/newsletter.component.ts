import { Component, inject } from '@angular/core';
import { AlertService } from '../../../../core/components/alert/service/alert.service';
import { NewsletterService } from '../../../../core/services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {
  public alertService = inject(AlertService);

  private newsletterService = inject(NewsletterService);

  /**
   * Submit newsletter
   * @param input 
   */
  submitNewsletter(input: any): void {
    this.newsletterService.insertLead(input.value as string).subscribe({
      next: () => {
        this.alertService.showSuccess();
      },
      error: () => {
        console.error('deu ruim');
      }
    })
  }
}
