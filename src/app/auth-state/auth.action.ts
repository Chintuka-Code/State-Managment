import { createAction, props } from '@ngrx/store';
import { Post, User } from '../model/user.interface';

const LOGIN_START = 'login start';
const LOGIN_SUCCESS = 'login success';

export const loginstart = createAction(LOGIN_START, props<User>());
export const loginsuccess = createAction(
  LOGIN_SUCCESS,
  props<{ data: Post[] }>()
);
