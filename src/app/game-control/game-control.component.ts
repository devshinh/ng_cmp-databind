import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() incrementOutput = new EventEmitter<number>();
  increment;
  numberInList = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame(){
    this.increment = setInterval(() => {
      this.incrementOutput.emit(this.numberInList + 1);
      this.numberInList++;
      console.log(this.numberInList);

    }, 1000);
  }

  stopGame(){
    clearInterval(this.increment);
  }
}
