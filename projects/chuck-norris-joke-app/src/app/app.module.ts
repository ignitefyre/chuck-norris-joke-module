import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';

import { ChuckNorrisJokeModule } from 'projects/chuck-norris-joke-module/src/public-api';
import { StoreModule } from '@ngrx/store';
import { AppEffects, AppReducers } from './store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChuckNorrisJokeModule,
    StoreModule.forRoot({ }),
    StoreModule.forFeature('POC_APP_STATE_KEY', AppReducers.appReducer),
    EffectsModule.forRoot([
      AppEffects.AppEffects
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
