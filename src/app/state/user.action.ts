import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.interface';

export const saveUser = createAction('saveUser', props<{ user_data: User }>());
