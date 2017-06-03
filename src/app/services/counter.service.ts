import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';

import {AppState} from '../models/appState';
import {Counter} from "../models/counter";

/*
*
* Counter services
*
* */

@Injectable()
export class CounterService {

  constructor(private store: Store<AppState>) {}

  getCurrentValue(): Observable<number> {
    return this.store.select(appState => appState.counter.currentValue)
      // .filter(Boolean);
  }

  getCounter(): Observable<Counter> {
    return this.store.select(appState => appState.counter);
  }

}
