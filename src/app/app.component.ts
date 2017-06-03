import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Counter} from "./models/counter";
import {CounterService} from "./services/counter.service";
import {CounterActions} from "./store/counter/counter.actions";

@Component({
  selector: 'app-root',
  template: `
    <counter [counter]="counter$ | async"
             (onIncrement)="actions.increment()"
             (onDecrement)="actions.decrement()"
             (onReset)="actions.reset()">
    </counter>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$: Observable<Counter>;

  constructor(
    counterService: CounterService,
    public actions: CounterActions
  ) {
    this.counter$ = counterService.getCounter();
  }
}
