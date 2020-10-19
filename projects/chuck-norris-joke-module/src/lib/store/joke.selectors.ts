import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JokeState } from './joke-state.model';

const getJokeState = createFeatureSelector<JokeState>('POC_JOKE_STATE_KEY');

export const selectJokeState = createSelector(
    getJokeState,
    (state) => state
);

export const selectJokeStateData = createSelector(
    getJokeState,
    (state) => state.joke
);
