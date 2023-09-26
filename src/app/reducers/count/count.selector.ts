import {createFeatureSelector, createSelector} from "@ngrx/store";
import {countName, ICountState} from "./count.reducer";

const selectCountFeature = createFeatureSelector<ICountState>(countName);

export const selectCount = createSelector(
  selectCountFeature,
  (state: ICountState): number => state.count
);
