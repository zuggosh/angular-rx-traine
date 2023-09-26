import { Component } from '@angular/core';
import {ICountState} from "./reducers/count/count.reducer";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectCount} from "./reducers/count/count.selector";
import {CountClearAction, CountDecreasedAction, CountIncreaseAction} from "./reducers/count/count.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$: Observable<number> = this.store$.pipe(select(selectCount));

  constructor(private store$: Store<ICountState> ) {
  }


  increase() {
    this.store$.dispatch(new CountIncreaseAction())
  }

  decrease() {
    this.store$.dispatch(new CountDecreasedAction())
  }

  clear() {
    this.store$.dispatch(new CountClearAction())
  }
}
