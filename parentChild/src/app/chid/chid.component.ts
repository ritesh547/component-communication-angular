import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-chid',
  templateUrl: './chid.component.html',
  styleUrls: ['./chid.component.scss']
})
export class ChidComponent implements OnChanges {
  public userObj: Object = {}
  @Input() receivedData: any;

  constructor(private dataService: UserDataService) {
    this.dataService.dataSubject.subscribe((data) => {
      // console.log('Received data in parent component:', data);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['receivedData']) {
      this.userObj = this.receivedData;
    }
  }

}
