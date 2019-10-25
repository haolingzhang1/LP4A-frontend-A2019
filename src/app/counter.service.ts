import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Counter } from './counter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  initialValue = [12, 6, 78];

  constructor(private http: HttpClient) { }

  reset(){
    this.initialValue = [0, 0, 0];
  }

  increment(position: number){
    this.patchCounter(position + 1);  
  }

  getCounterValue(id: number) : Observable<Counter> {
    var apiUrl = 'https://lp4a-backend-a2019.herokuapp.com/counters/' + id + '.json';
    return this.http.get<Counter>(apiUrl);
  }

  patchCounter(id: number) {
    var url = 'https://lp4a-backend-a2019.herokuapp.com/counters/' + id;
    this.http.patch(url, {}).subscribe();
  }
}
