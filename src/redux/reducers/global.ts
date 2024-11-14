import {redux} from '../../themes/appConstans';

const initialState = {
  isLoading: false,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case redux.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
