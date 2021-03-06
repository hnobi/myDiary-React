import toastr from 'toastr';
import { signUpRequest } from '../../services/apiRequest';
import {
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST
} from '../constant/actionTypes';

const userSignup = data => (dispatch) => {
  dispatch({
    type: USER_SIGNUP_REQUEST
  });
  return signUpRequest(data)
    .then((response) => {
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: response.data
      });
      toastr.success(response.data.message);
    })
    .catch((error) => {
      let message;
      if (error.response) {
        ({ message } = error.response.data);
      } else {
        message = 'An unexpected error occured. please check your internet connection and try again';
      }
      dispatch({
        type: USER_SIGNUP_FAILURE,
        payload: message
      });

      toastr.error(message);
    });
};

export default userSignup;
