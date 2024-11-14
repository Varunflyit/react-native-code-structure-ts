import {all, takeLatest} from 'redux-saga/effects';
import {redux} from '../../themes/appConstans';
import {
  changePasswordSaga,
  forgotPasswordOtpVerifySaga,
  forgotPasswordSaga,
  loginSaga,
  registerOtpVerifySaga,
  registerSaga,
} from './auth';
function* rootSaga() {
  yield all([
    takeLatest(redux.API_LOGIN_SAGA, loginSaga),
    takeLatest(redux.API_REGISTER_SAGA, registerSaga),
    takeLatest(redux.API_REGISTER_OTP_VERIFY_SAGA, registerOtpVerifySaga),
    takeLatest(redux.API_FORGOT_PASSWORD_SAGA, forgotPasswordSaga),
    takeLatest(
      redux.API_FORGOT_PASSWORD_OTP_VERIFY_SAGA,
      forgotPasswordOtpVerifySaga,
    ),
    takeLatest(redux.API_CHANGE_PASSWORD_SAGA, changePasswordSaga),
  ]);
}

export default rootSaga;
