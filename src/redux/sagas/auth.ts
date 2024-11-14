import {call, put} from 'redux-saga/effects';
import {setToken} from '../../helpers/token';
import {AppRoutes, redux} from '../../themes/appConstans';
import {
  ChangePasswordApi,
  ForgotPasswordApi,
  ForgotPasswordOtpVerifyApi,
  LoginApi,
  RegisterApi,
  RegisterOtpVerifyApi,
} from '../axios/apiCall';
import {showToast} from '../../helpers/showToast';
import {navigate, reset} from '../../routes/navigationServices';

export function* loginSaga(action: any) {
  try {
    yield put({
      type: redux.IS_LOADING,
      payload: true,
    });
    const {status, result} = yield call(LoginApi, action.payload);
    yield put({
      type: redux.IS_LOADING,
      payload: false,
    });
    if (status === 1) {
      setToken(result?.data?.token);
      yield put({
        type: redux.USER_DATA_UPDATE,
        payload: result?.data,
      });
      if (result?.data?.is_location === 0) {
        reset(AppRoutes.location, 0);
      } else if (result?.data?.is_vehicle === 0) {
        reset(AppRoutes.addAVehicle, 0);
      } else {
        reset(AppRoutes.bottomTabRoutes, 0);
      }
    } else {
      showToast('error', result.message);
    }
  } catch (e) {
    yield put({
      type: redux.IS_LOADING,
      payload: false,
    });
    console.log('error', JSON.stringify(e));
  }
}

export function* registerSaga(action: any) {
  try {
    yield put({
      type: redux.IS_LOADING,
      payload: true,
    });
    const {status, result} = yield call(RegisterApi, action.payload);
    yield put({
      type: redux.IS_LOADING,
      payload: false,
    });
    if (status === 1) {
      navigate(AppRoutes.otpVerification, {
        mobile_number: action.payload.mobile_number,
      });
    } else {
      showToast('error', result.message);
    }
  } catch (e) {
    yield put({
      type: redux.IS_LOADING,
      payload: false,
    });
    console.log('error', JSON.stringify(e));
  }
}

export function* registerOtpVerifySaga(action: any) {
  try {
    yield put({
      type: redux.IS_LOADING,
      payload: true,
    });
    const {status, result} = yield call(RegisterOtpVerifyApi, action.payload);
    yield put({
      type: redux.IS_LOADING,
      payload: false,
    });
    if (status === 1) {
      setToken(result?.data?.token);
      yield put({
        type: redux.USER_DATA_UPDATE,
        payload: result?.data,
      });
      reset(AppRoutes.location, 0);
    } else {
      showToast('error', result.message);
    }
  } catch (e) {
    yield put({
      type: redux.IS_LOADING,
      payload: false,
    });
    console.log('error', JSON.stringify(e));
  }
}

export function* forgotPasswordSaga(action: any) {
  try {
    yield put({
      type: redux.IS_LOADING,
      payload: true,
    });
    const {status, result} = yield call(ForgotPasswordApi, {
      mobile_number: action.payload.mobile_number,
    });
    yield put({
      type: redux.IS_LOADING,
      payload: false,
    });
    if (status === 1) {
      if (action.payload.isResend) {
        showToast('success', result.message);
      } else {
        navigate(AppRoutes.forgotPasswordOTP, {
          mobile_number: action.payload.mobile_number,
        });
      }
    } else {
      showToast('error', result.message);
    }
  } catch (e) {
    yield put({
      type: redux.IS_LOADING,
      payload: false,
    });
    console.log('error', JSON.stringify(e.message));
  }
}

export function* forgotPasswordOtpVerifySaga(action: any) {
  try {
    yield put({
      type: redux.IS_LOADING,
      payload: true,
    });
    const {status, result} = yield call(
      ForgotPasswordOtpVerifyApi,
      action.payload,
    );
    yield put({
      type: redux.IS_LOADING,
      payload: false,
    });
    if (status === 1) {
      navigate(AppRoutes.changePassword, {
        mobile_number: action.payload.mobile_number,
      });
    } else {
      showToast('error', result.message);
    }
  } catch (e) {
    yield put({
      type: redux.IS_LOADING,
      payload: false,
    });
    console.log('error', JSON.stringify(e));
  }
}

export function* changePasswordSaga(action: any) {
  try {
    yield put({
      type: redux.IS_LOADING,
      payload: true,
    });
    const {status, result} = yield call(ChangePasswordApi, action.payload);
    yield put({
      type: redux.IS_LOADING,
      payload: false,
    });
    if (status === 1) {
      showToast('success', result.message);
      reset(AppRoutes.login, 0);
    } else {
      showToast('error', result.message);
    }
  } catch (e) {
    yield put({
      type: redux.IS_LOADING,
      payload: false,
    });
    console.log('error', JSON.stringify(e));
  }
}
