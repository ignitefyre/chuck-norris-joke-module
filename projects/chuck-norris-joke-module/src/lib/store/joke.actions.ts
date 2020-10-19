import { createAction, props } from '@ngrx/store';
import { Joke } from '../shared/models/Joke';

export const getJoke = createAction(
    '[Joke] Get Joke'
);

export const getJokeSuccess = createAction(
    '[Joke] Get Joke Success',
    props<{ joke: Joke }>()
);
