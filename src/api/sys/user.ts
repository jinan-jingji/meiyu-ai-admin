import { defHttp } from '@/utils/http/axios';
import {
  RegistrationResult,
  RegistrationParams,
  PasswordResetParams,
  PasswordResetResult,
  LoginParams,
  LoginResultModel,
  GetUserInfoModel,
} from './model/userModel';

import { ErrorMessageMode } from '#/axios';

enum Api {
  Register = '/account/register/',
  passwordReset = '/account/passwordReset/',
  Login = '/account/login/',
  Logout = '/account/logout/',
  GetUserInfo = '/account/getUserInfo/',
  GetPermCode = '/account/getPermCode/',
  TestRetry = '/account/testRetry/',
}

/**
 * @description: Register api
 */

export function registerApi(params: RegistrationParams) {
  return defHttp.post<RegistrationResult>({
    url: Api.Register,
    params,
  });
}

export function passwordResetApi(params: PasswordResetParams) {
  return defHttp.post<PasswordResetResult>({
    url: Api.passwordReset,
    params,
  });
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
