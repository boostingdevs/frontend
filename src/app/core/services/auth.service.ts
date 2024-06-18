import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * HttpClient Service DI
   */
  private httpClient = inject(HttpClient)

  /**
   * Sign in with GitHub
   */
  public signInWithGitHub() {
    return this.httpClient.get(`${environment.API}/auth`)
  } 
}
