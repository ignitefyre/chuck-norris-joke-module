import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Joke } from './shared/models/Joke';
import { JokeState } from './store/joke-state.model';
import { getJoke } from './store/joke.actions';
import { selectJokeStateData, selectJokeStateIsLoading } from './store/joke.selectors';

@Component({
  selector: 'chuck-norris-joke',
  templateUrl: './chuck-norris-joke.component.html',
  styleUrls: ['./chuck-norris-joke.component.scss']
})
export class ChuckNorrisJokeComponent implements OnInit {

  joke: string;
  isLoading: Observable<boolean>;

  constructor(private store: Store<JokeState>) { }

  ngOnInit(): void {
    this.store.dispatch(getJoke());

    this.store.pipe(
      select(selectJokeStateData)
    ).subscribe({
      next: response => {
        if (response) {
          this.joke = response.joke;
        }
      }
    });

    this.isLoading = this.store.pipe(select(selectJokeStateIsLoading));
  }

  getAnotherJoke(): void {
    this.joke = null;
    this.store.dispatch(getJoke());
  }

}
