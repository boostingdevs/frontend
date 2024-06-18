import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from '../types/challenge/challenge.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {
  /**
   * HttpClient Service DI
   */
  private httpClient = inject(HttpClient)

  /**
   * Get challenges from Supabase database
   * @returns {Observable<Challenge[]>} an observable with a challenge array
   */
  getChallenges(): Observable<Challenge[]> {
    return this.httpClient.get<Challenge[]>(`${environment.API}/challenges`)
  }

  /**
   * Get challenge by identifier from Supabase database
   * @returns {Observable<Challenge>} an observable with a challenge object
   */
  getChallengeById(id: number): Observable<Challenge> {
    return this.httpClient.get<Challenge>(`${environment.API}/challenges/${id}`)
  }
}
