import { createReducer, on } from '@ngrx/store';
import { saveUser, updateSpinner } from './user.action';
import { initialState } from './user.state';

const _userReducer = createReducer(
  initialState,
  on(saveUser, (state, action): any => {
    return {
      ...state,
      user: action.user_data,
    };
  }),
  on(updateSpinner, (state, action): any => {
    return {
      ...state,
      spinner: true,
    };
  })
);

export const userReducer = (state, action) => _userReducer(state, action);
