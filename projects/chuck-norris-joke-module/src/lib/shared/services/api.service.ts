import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JokeResponse } from '../models/JokeResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private readonly http: HttpClient) { }

  getRandomJoke(): Observable<JokeResponse> {
    return this.http.get<JokeResponse>('https://api.chucknorris.io/jokes/random');
  }
}