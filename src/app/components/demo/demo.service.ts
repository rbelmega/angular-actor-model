import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './redux/demo.actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DemoService {
  constructor(private store: Store<any>, private http: HttpClient) {}

  loadPlanetData({ id }) {
    this.store.dispatch(actions.loadPlanetDataPending());

    this.http.get('https://swapi.co/api/planets/1/').subscribe(
      (data: any) => {
        this.store.dispatch(actions.loadPlanetDataSuccess(data));

        data.residents.forEach(resident => this.loadResident(resident));
      },
      error => this.store.dispatch(actions.loadPlanetDataFailure(error))
    );
  }

  loadResident(url) {
    this.store.dispatch(actions.loadResidentPending(url));

    this.http.get(url).subscribe(
      data => {
        this.store.dispatch(actions.loadResidentSuccess(data, url));
      },
      error => this.store.dispatch(actions.loadResidentFailure(error, url))
    );
  }
}
