import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  initialValue = [12, 6, 78];

  constructor() { }

  reset(){
    this.initialValue = [0, 0, 0];
  }

  increment(position: number): number{
    return ++(this.initialValue[position]);
  }
}
