import { AuthReducer } from '../auth-state/auth.reducer';
import { userReducer } from '../state/user.reducer';

export const AppState = {
  user: userReducer,
  auth: AuthReducer,
};
