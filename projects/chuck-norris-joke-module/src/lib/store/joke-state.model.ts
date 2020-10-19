import { Joke } from '../shared/models/Joke';

export interface JokeState {
  isLoading: boolean;
  joke?: Joke;
}

export function createInitialJokeState(): JokeState {
  return {
    isLoading: false,
  };
}
