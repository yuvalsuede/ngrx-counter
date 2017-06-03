import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Counter} from "../models/counter";

@Component({
  selector: 'counter',
  template: `
    <p>
      Clicked: {{ counter?.currentValue}} times
      <button (click)="onIncrement.emit()">+</button>
      <button (click)="onDecrement.emit()">-</button>
      <button (click)="onReset.emit()">Reset</button>
    </p>
`
})
export class CounterComponent {

  @Input()
  counter: Counter | undefined;

  @Output()
  onIncrement: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  onDecrement: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  onReset: EventEmitter<void> = new EventEmitter<void>();

}
