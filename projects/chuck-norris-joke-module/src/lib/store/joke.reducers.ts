import { createReducer, on } from '@ngrx/store';
import { createInitialJokeState } from './joke-state.model';
import { AppActions } from '.';

const initialState = createInitialJokeState();

export const jokeReducer = createReducer(
  initialState,

  on(AppActions.getJoke,
    state => ({ ...state, isLoading: true })),

  on(AppActions.getJokeSuccess,
    (state, { joke }) => ({ ...state, joke, isLoading: false }))
);
