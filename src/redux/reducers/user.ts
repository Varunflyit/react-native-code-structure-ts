import {redux} from '../../themes/appConstans';

const initialState = {
  user: null,
  token: null,
  firstTimeAppOpened: true,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case redux.USER_DATA_UPDATE:
      return {
        ...state,
        user: action.payload,
        token: action.payload.token,
      };
    case redux.APP_FIRST_TIME_OPENED_UPDATE:
      return {
        ...state,
        firstTimeAppOpened: false,
      };
    case redux.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};
