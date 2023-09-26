import {Action} from "@ngrx/store";

export enum countActionsType {
  increase = '[COUNT] increase',
  decreased = '[COUNT] decreased',
  clear = '[COUNT] clear'
}

export class CountIncreaseAction implements Action {
  readonly type = countActionsType.increase;
}

export class CountDecreasedAction implements Action {
  readonly type = countActionsType.decreased;
}

export class CountClearAction implements Action {
  readonly type = countActionsType.clear;
}

export type CountActions = CountIncreaseAction | CountDecreasedAction | CountClearAction;
