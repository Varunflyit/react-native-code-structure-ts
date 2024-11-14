import {redux} from '../../themes/appConstans';

export const firstTimeAppOpenedAction = () => {
  return {
    type: redux.APP_FIRST_TIME_OPENED_UPDATE,
  };
};
export const loginAction = (data: any) => {
  return {
    type: redux.API_LOGIN_SAGA,
    payload: data,
  };
};
export const registerAction = (data: any) => {
  return {
    type: redux.API_REGISTER_SAGA,
    payload: data,
  };
};
export const registerOtpVerifyAction = (data: any) => {
  return {
    type: redux.API_REGISTER_OTP_VERIFY_SAGA,
    payload: data,
  };
};
export const forgotPasswordAction = (data: any) => {
  return {
    type: redux.API_FORGOT_PASSWORD_SAGA,
    payload: data,
  };
};
export const forgotPasswordOtpVerifyAction = (data: any) => {
  return {
    type: redux.API_FORGOT_PASSWORD_OTP_VERIFY_SAGA,
    payload: data,
  };
};
export const changePasswordAction = (data: any) => {
  return {
    type: redux.API_CHANGE_PASSWORD_SAGA,
    payload: data,
  };
};
export const logoutAction = () => {
  return {
    type: redux.LOGOUT,
  };
};
