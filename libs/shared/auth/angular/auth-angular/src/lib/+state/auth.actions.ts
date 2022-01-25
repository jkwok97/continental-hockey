import { UserDto } from '@cha/shared/api';
import { createAction, props } from '@ngrx/store';

const NAMESPACE = '[Auth]';

const login = createAction(`${NAMESPACE} Login`, props<{ email: string }>());

const loginSuccess = createAction(
  `${NAMESPACE} Login Success`,
  props<{ user: UserDto }>()
);

const loginFailed = createAction(`${NAMESPACE} Login Failed`);

const logout = createAction(`${NAMESPACE} Logout`);

const logoutConfirmed = createAction(`${NAMESPACE} Logout Confirmed`);

export const authActions = {
  login,
  loginSuccess,
  loginFailed,
  logout,
  logoutConfirmed,
};
