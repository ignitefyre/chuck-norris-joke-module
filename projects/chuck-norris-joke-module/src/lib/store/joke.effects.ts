import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { AppActions } from '.';
import { ApiService } from '../shared/services/api.service';

@Injectable()
export class JokeEffects {
    constructor(
        private actions$: Actions,
        private service: ApiService) { }

    @Effect()
    public getJoke = this.actions$.pipe(
        ofType(AppActions.getJoke),
        switchMap(() => this.service.getRandomJoke()
            .pipe(
                map(result => AppActions.getJokeSuccess({ joke: result.value }))
            )
        )
    );
}
