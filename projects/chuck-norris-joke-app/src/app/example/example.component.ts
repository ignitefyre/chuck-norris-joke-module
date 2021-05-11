import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app-state.model';
import { getString } from '../store/app.actions';
import { selectAppStateData, selectAppStateIsLoading } from '../store/app.selectors';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  value: string;
  isLoading: Observable<boolean>;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getString());

    this.store.pipe(
      select(selectAppStateData)
    ).subscribe({
      next: response => {
        if (response) {
          this.value = response;
        }
      }
    });

    this.isLoading = this.store.pipe(select(selectAppStateIsLoading));
  }

}
