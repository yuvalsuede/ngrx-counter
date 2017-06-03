import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import 'rxjs/Rx';

import {rootReducer} from './store/root.reducer';
import {CounterActions} from './store/counter/counter.actions';
// import {CounterEffects} from './store/effects';
// import {AppComponent, CounterComponent} from './components';
import {AppComponent} from './app.component';
import {CounterService} from './services/counter.service';
import {CounterComponent} from "./components/counter.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(rootReducer)
  ],
  declarations: [
    AppComponent,
    CounterComponent
  ],
  providers: [
    CounterActions,
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
