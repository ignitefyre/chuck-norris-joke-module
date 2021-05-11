import { createReducer, on } from '@ngrx/store';
import { createInitialAppState } from './app-state.model';
import { AppActions } from '.';

const initialState = createInitialAppState();

export const appReducer = createReducer(
  initialState,

  on(AppActions.getString,
    state => ({ ...state, isLoading: true })),

  on(AppActions.getStringSuccess,
    (state, { value }) => ({ ...state, value, isLoading: false }))
);
