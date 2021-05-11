import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app-state.model';

const getAppState = createFeatureSelector<AppState>('POC_APP_STATE_KEY');

export const selectAppState = createSelector(
    getAppState,
    (state) => state
);

export const selectAppStateData = createSelector(
    getAppState,
    (state) => state.value
);

export const selectAppStateIsLoading = createSelector(
    getAppState,
    (state) => state.isLoading
);