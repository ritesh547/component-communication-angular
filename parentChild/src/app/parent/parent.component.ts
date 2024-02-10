import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public userList: any = [];
  public selectedUser:any = [];
  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.userList = this.userDataService.users;
  }

  public onAddItem(selectedItem: any){
    this.selectedUser = selectedItem;
    this.userDataService.sendData(this.selectedUser);
  }
}
