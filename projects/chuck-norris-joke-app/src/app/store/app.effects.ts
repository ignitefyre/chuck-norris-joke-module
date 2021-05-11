import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { AppActions } from '.';
import { AppService } from '../app.service';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private service: AppService) { }

    @Effect()
    public getJoke = this.actions$.pipe(
        ofType(AppActions.getString),
        switchMap(() => this.service.getValue()
            .pipe(
                map(result => AppActions.getStringSuccess({ value: result }))
            )
        )
    );
}