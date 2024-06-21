import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  public progressBarState = new BehaviorSubject<boolean>(false);

  constructor() { }
}
