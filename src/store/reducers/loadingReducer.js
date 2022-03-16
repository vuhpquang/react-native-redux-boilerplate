/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import * as types from 'store/actions/actionTypes';
import createReducer from './createReducer';

const initialState = {
  isLoginLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state) {
    return { ...state, isLoginLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state) {
    return { ...state, isLoginLoading: false };
  },
});
