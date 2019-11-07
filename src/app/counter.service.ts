import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Counter } from './counter';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  initialValue = [12, 6, 78];

  constructor(private http: HttpClient) { }

  reset(){
    this.initialValue = [0, 0, 0];
  }

  async increment(position: number) : Promise<number> {
    var id = position + 1;
    var newPromiseValue = await this.patchCounter(id).pipe(
      switchMap(() => this.getCounter(id)),
      map(counter => counter.value) 
    ).toPromise();
    return newPromiseValue;
  }

  getCounter(id: number) : Observable<Counter> {
    var url = 'https://lp4a-backend-a2019.herokuapp.com/counters/' + id + '.json';
    return this.http.get<Counter>(url);
  }

  patchCounter(id: number) : Observable<Object> {
    var url = 'https://lp4a-backend-a2019.herokuapp.com/counters/' + id + '.json';
    return this.http.patch(url, {});
  }
}
