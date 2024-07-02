import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {
  /**
   * HttpClient Service DI
   */
  private httpClient = inject(HttpClient)

  /**
   * 
   * @returns {Observable<Challenge[]>} 
   */
  insertLead(email: string): Observable<any> {
    return this.httpClient.get<any>(`${environment.API}/leads/${email}`)
  }
}
