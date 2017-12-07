import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIncrementOuput(incrementVal: number){
    if(incrementVal % 2 === 0)
      this.evenNumbers.push(incrementVal);
    else
      this.oddNumbers.push(incrementVal);

  }

}
