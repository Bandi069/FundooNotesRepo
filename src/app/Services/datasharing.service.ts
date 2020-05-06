import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private messageSource = new BehaviorSubject(false);
  Message = this.messageSource.asObservable();
  labels: any;
 // Message: any;

  constructor() { }
  changeMessage(message: boolean) {
    this.messageSource.next(message)
  }
  
}
