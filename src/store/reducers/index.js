/*
 * combines all th existing reducers
 */
import { loadingReducer } from './loadingReducer';
import { loginReducer } from './loginReducer';
export default {
  loginReducer,
  loadingReducer,
};
