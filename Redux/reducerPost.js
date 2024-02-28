// reducers.js
import * as UserConstants from './constant';

const initialState = {
  title: {},
  loading: false,
  error: false,
};

export const userReducerPost = (state = initialState, action) => {
  switch (action.type) {
    case UserConstants.POST_USER:
      return { ...state, loading: true };
    case UserConstants.POST_USER_SUCCESS:
      return { ...state, title: action.payload, loading: false };
    case UserConstants.POST_USER_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
