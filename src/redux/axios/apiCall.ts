import {Method} from './apiMethods';

const header = {
  Accept: '*/*',
  'Content-Type': 'application/json',
};

export const LoginApi = (data: any) => Method.POST('/user-login', data, header);

export const RegisterApi = (data: any) =>
  Method.POST('/user-register', data, header);

export const RegisterOtpVerifyApi = (data: any) =>
  Method.POST('/user-otpverify', data, header);

export const ForgotPasswordApi = (data: any) =>
  Method.POST('/user-otp', data, header);

export const ForgotPasswordOtpVerifyApi = (data: any) =>
  Method.POST('/user-verifyOtp', data, header);

export const ChangePasswordApi = (data: any) =>
  Method.POST('/user-passwordchange', data, header);

// const multiPartheader = {
//   Accept: 'application/json',
//   'Content-Type': 'multipart/form-data; ',
// };
