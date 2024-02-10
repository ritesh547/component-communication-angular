import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  public dataSubject = new Subject<any>();
  public sendData(data: any) {
    this.dataSubject.next(data);
  }

  constructor() { }
  public users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Mohan', email: 'jane@example.com' },
  ];

}
