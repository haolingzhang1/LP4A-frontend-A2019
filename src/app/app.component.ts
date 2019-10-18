import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counters';
  constructor(private counterServer: CounterService){  }
  reset(){
    this.counterServer.reset();
  }  
}
