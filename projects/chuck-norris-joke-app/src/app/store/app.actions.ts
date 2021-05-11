import { createAction, props } from '@ngrx/store';

export const getString = createAction(
    '[APP] Get String'
);

export const getStringSuccess = createAction(
    '[APP] Get String Success',
    props<{ value: string }>()
);