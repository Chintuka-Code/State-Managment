import { createReducer, on } from '@ngrx/store';
import { saveUser } from './user.action';
import { initialState } from './user.state';

const _userReducer = createReducer(
  initialState,
  on(saveUser, (state, action): any => {
    return {
      ...state,
      user: action.user_data,
    };
  })
);

export const userReducer = (state, action) => _userReducer(state, action);
