import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Joke } from './shared/models/Joke';
import { JokeState } from './store/joke-state.model';
import { getJoke } from './store/joke.actions';
import { selectJokeStateData } from './store/joke.selectors';

@Component({
  selector: 'chuck-norris-joke',
  templateUrl: './chuck-norris-joke.component.html',
  styles: []
})
export class ChuckNorrisJokeComponent implements OnInit {

  joke: Joke;

  constructor(private store: Store<JokeState>) { }

  ngOnInit(): void {
    this.store.dispatch(getJoke());

    this.store.pipe(
      select(selectJokeStateData)
    ).subscribe({
      next: response => {
        this.joke = response;
      }
    });
  }

  getAnotherJoke(): void {
    this.store.dispatch(getJoke());
  }

}
