import { Component, ElementRef, inject } from '@angular/core';
import { AlertService } from '../../../../core/components/alert/services/alert.service';
import { NewsletterService } from '../../../../core/services/newsletter.service';
import { finalize } from 'rxjs';
import { EmailValidator, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {
  public alertService = inject(AlertService);

  /**
   * Newsletter Service
   */
  private newsletterService = inject(NewsletterService);

  /**
   * Email
   */
  email: FormControl = new FormControl('', [Validators.email, Validators.required]);

  public inputLoading = false;

  /**
   * Submit newsletter
   * @param input 
   */
  submitNewsletter(input: HTMLDivElement): void {
    input.classList.remove('error');

    this.inputLoading = true;

    if(this.email.valid && this.email.touched) {
      this.newsletterService.insertLead(this.email.value)
      .pipe(finalize(() => {
        this.inputLoading = false;
        this.email.reset();
      }))
      .subscribe({
        next: () => {
          this.alertService.showSuccess();
        },
      })
    } else {
      input.classList.add('error');
      this.inputLoading = false;
    }
  }

}