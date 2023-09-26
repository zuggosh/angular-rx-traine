import {CountActions, countActionsType} from "./count.actions";

export const countName = 'count';

export interface ICountState {
  count: number
}

const initialState: ICountState = {
  count: 0
}

export const countReducers = (state = initialState, action: CountActions): ICountState => {
  switch (action.type) {
    case countActionsType.increase:
      return {
        ...state,
        count: state.count + 1
      }
    case countActionsType.decreased:
      return {
        ...state,
        count: state.count - 1
      }
    case countActionsType.clear:
      return {
        ...state,
        count: 0
      }
    default:
      return state;
  }
};
