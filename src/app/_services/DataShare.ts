import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShare {
  private data = new BehaviorSubject<any>(null);

  // making variable an observable
  getDetails(): Observable<any> {
    return this.data.asObservable();
  }

  // setting the data
  setDetails(detailsObj: any): void {
    this.data.next(detailsObj);
  }
}
