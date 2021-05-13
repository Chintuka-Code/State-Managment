import { state } from '@angular/animations';
import { act } from '@ngrx/effects';
import { createReducer, on } from '@ngrx/store';
import { loginstart, loginsuccess } from './auth.action';
import { initialState } from './auth.state';

const _authReducer = createReducer(
  initialState,
  on(loginsuccess, (state, action) => {
    return {
      ...state,
      data: action.data,
    };
  })
);

export const AuthReducer = (state, action) => _authReducer(state, action);
