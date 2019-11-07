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
  @Input() position : number;
  title = "Compteur";
  name: string;
  value: number;

  constructor(public counterService: CounterService) { }

  ngOnInit() {
    this.counterService.getCounter(this.position + 1).subscribe(counter => this.name = counter.name);
    this.counterService.getCounter(this.position + 1).subscribe(counter => this.value = counter.value);
  }

  async increment(){
    this.value = await this.counterService.increment(this.position);
  }
}
