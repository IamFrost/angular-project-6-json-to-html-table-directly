import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject(null);
  // private messageSource = new ReplaySubject(null);
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message: any) {
    console.log('changed');
    console.log(message);
    this.messageSource.next(message);
  }
}
