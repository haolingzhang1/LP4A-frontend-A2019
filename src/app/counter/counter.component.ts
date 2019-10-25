import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable } from 'rxjs';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() position;
  title = "Compteur";
  name: string;
  value: number;

  constructor(public counterService: CounterService) { }

  ngOnInit() {
    this.counterService.getCounterValue(this.position + 1).subscribe(counter => this.name = counter.name);
    this.counterService.getCounterValue(this.position + 1).subscribe(counter => this.value = counter.value);
  }

  increment(){
    this.counterService.increment(this.position);
    this.counterService.getCounterValue(this.position + 1).subscribe(counter => this.value = counter.value);
  }
}
