import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  name: "elmer";
  infoObj: any = {
    name: "Elmer Vasquez", 
    school: "UC SANTA CRUZ, Junior", 
    major: "Computer Science", 
    bio: "I enjoy programming, anime, drawing, hanging with friends and family, and I love listening to chill music."
  }

  constructor() {}

}
