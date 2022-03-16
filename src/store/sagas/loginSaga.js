/* Redux saga class
 * logins the user into the app
 * requires phone and password.
 * un - phone
 * pwd - password
 */
import { Alert } from 'react-native';
import { call, put } from 'redux-saga/effects';
import { HTTP_STATUS_CODE } from 'src/constants';
import { loginUser } from 'api/auth';
import { loginActions } from 'store/actions';
// import { delay } from 'redux-saga';

// Our worker Saga that logins the user
export default function* loginAsync(action) {
  yield put(loginActions.enableLoader());

  //how to call api
  const response = yield call(loginUser, action.phone, action.password);
  //mock response
  // const response = { success: true, data: { id: 1 }, message: 'Success' };

  if (response && response.status === HTTP_STATUS_CODE.OK && response.data.result) {
    yield put(loginActions.onLoginResponse(response.data));
    yield put(loginActions.disableLoader());

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader());
    setTimeout(() => {
      Alert.alert('BoilerPlate', response.message);
    }, 200);
  }
}
