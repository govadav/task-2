import { Component } from '@angular/core';

@Component({
  selector: 'tmo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  statusFromParent: any 

  finishedStatus(payload){
    
    this.statusFromParent = payload;
   
  }
}
