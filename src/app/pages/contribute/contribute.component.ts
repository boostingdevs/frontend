import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContributeService } from '../../core/services/contribute.service';
import { Message } from '../../core/types/message/message.model';
import { finalize } from 'rxjs';
import { AlertService } from '../../core/components/alert/services/alert.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrl: './contribute.component.scss'
})
export class ContributeComponent {  
  private contributeService = inject(ContributeService);
  private alertService = inject(AlertService);

  public loading = false;

  public contributeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,  Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  /**
   * Send message
   */
  sendMessage(): void {
    if(this.contributeForm.valid) {
      this.loading = true;

      const message: Message = {
        name: this.contributeForm.value.name!,
        email: this.contributeForm.value.email!,
        message: this.contributeForm.value.message!,
      } 

      this.contributeService.sendMessages(message)
      .pipe(finalize(() => {
        this.contributeForm.reset();
        this.loading = false;
        this.alertService.showSuccess('Mensagem enviada com sucesso!')
      }))
      .subscribe(() => {
        next: () => {

        }
      });
    }

  }
}
