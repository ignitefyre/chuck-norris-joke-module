import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ChuckNorrisJokeComponent } from './chuck-norris-joke.component';

import { AppEffects, AppReducers } from './store';

@NgModule({
  declarations: [ChuckNorrisJokeComponent],
  imports: [
    HttpClientModule,
    StoreModule.forRoot({ }),
    StoreModule.forFeature('POC_JOKE_STATE_KEY', AppReducers.jokeReducer),
    EffectsModule.forRoot([
      AppEffects.JokeEffects
    ]),
  ],
  exports: [ChuckNorrisJokeComponent]
})
export class ChuckNorrisJokeModule { }
