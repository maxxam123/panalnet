import axios from 'axios';
import {
  createUserFailure,
  createUserStart,
  createUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUserFailure,
  getUserStart,
  getUserSuccess,
} from './UserActions';

// GET
export const getUser = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get('http://localhost:8000/api/users/');
    console.log('apicalls');
    console.log(res.data);
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

// DELETE
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete('http://localhost:8000/api/users/' + id);
    console.log('apicalls');
    console.log(id);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

// CREATE
export const createUser = async (inputs, dispatch) => {
  dispatch(createUserStart());
  try {
    const res = await axios.post(
      'http://localhost:8000/api/auth/register/',
      inputs
    );
    console.log('apicalls');
    console.log(res.data);
    dispatch(createUserSuccess(res.data));
  } catch (err) {
    dispatch(createUserFailure());
  }
};
