import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';

import { ChuckNorrisJokeModule } from 'projects/chuck-norris-joke-module/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChuckNorrisJokeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
