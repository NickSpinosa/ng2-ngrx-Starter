import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';


//each key should correspond to an imported interface
export interface State {

};


//each key should correspond to an imported reducer
const reducers = {

};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}