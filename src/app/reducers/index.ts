import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as demo from '../components/demo/redux/demo.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  demo: demo.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
