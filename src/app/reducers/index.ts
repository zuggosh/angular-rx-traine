import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {countReducers, ICountState, countName} from "./count/count.reducer";

export interface State {
  [countName]: ICountState
}

export const reducers: ActionReducerMap<State> = {
  // @ts-ignore
  [countName]: countReducers
}

export const metaReducers: MetaReducer<State>[] = [];
