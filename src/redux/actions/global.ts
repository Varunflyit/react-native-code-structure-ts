import {redux} from '../../themes/appConstans';

export const loaderAction = data => {
  return {
    type: redux.IS_LOADING,
    payload: data,
  };
};
