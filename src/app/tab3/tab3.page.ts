import { Component } from '@angular/core';
import friendsObj from './friendsObj';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  friendsList: any[];
  // friendsList : any[] = friendsObj;
  constructor() {
    this.friendsList = friendsObj;
    // console.log(friendsObj);
    // console.log(this.friendsList[0].name);
  }

}
