import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {CounterActions} from '../store/counter/counter.actions';
import {CounterService} from "../services/counter.service";

@Component({
  selector: 'counter',
  template: `
    <p>
      Clicked: {{ currentValue$ | async}} times
      <button (click)="actions.increment()">+</button>
      <button (click)="actions.decrement()">-</button>
      <button (click)="actions.reset()">Reset</button>
    </p>
`
})
export class CounterComponent {

  private currentValue$: Observable<number>;

  constructor( counterService: CounterService, public actions: CounterActions ) {
    this.currentValue$ = counterService.getCurrentValue();
  }

}
