import * as UserConstants from './constant';
import { fetchUser} from '../api';
import { postUser } from '../api';

export const fetchUserAction = (user) => (dispatch) => {
  
  return new Promise((resolve, reject) => {
    dispatch({
      type: UserConstants.FETCH_USER,
    });
    fetchUser(user)
      .then((response) => {
        dispatch({
          type: UserConstants.FETCH_USER_SUCCESS,
          payload: response.data,
        });
        resolve(response);
      })
      .catch((err) => {
        dispatch({
          type: UserConstants.FETCH_USER_ERROR,
        });
        reject(err);
      });
  });
};
 
// *****************************************************postUserMethod************************************************************

export const postUserAction = (userObj) => async (dispatch) => {
    try {
      dispatch({
        type: UserConstants.POST_USER,
      });

      const response = await postUser(userObj);
  
      dispatch({
        type: UserConstants.POST_USER_SUCCESS,
        payload: response.data,
       
      });
      } catch (error) {
      dispatch({
        type: UserConstants.POST_USER_ERROR,
      });
      console.error('An error occurred:', error);
    }
  };