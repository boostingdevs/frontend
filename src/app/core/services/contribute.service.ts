import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Message } from '../types/message/message.model';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributeService {
  private httpClient = inject(HttpClient);

  /**
   * Send messages
   * @param data 
   */
  sendMessages(data: Message): Observable<Message> {
    return this.httpClient.post<Message>(`${environment.API}/messages`, {
      name: data.name,
      message: data.message,
      email: data.email
    })
  }
  
}
