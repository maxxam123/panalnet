import axios from 'axios';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
} from './AuthAction';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:8000/api/auth/login', user);
    dispatch(loginSuccess(res.data));
    // console.log(res.data.other.isAdmin);
    // res.data.other.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
};
