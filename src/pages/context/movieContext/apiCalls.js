import axios from 'axios';
import {
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
  deleteMoviesStart,
  deleteMoviesSuccess,
  deleteMoviesFailure,
  createMoviesStart,
  createMoviesSuccess,
  createMoviesFailure,
  updateMoviesStart,
  updateMoviesSuccess,
  updateMoviesFailure,
} from './MovieActions';

// GET
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get('http://localhost:8000/api/movies/');
    console.log('apicalls');
    console.log(res.data);
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};

// DELETE
export const deleteMovies = async (id, dispatch) => {
  dispatch(deleteMoviesStart());
  try {
    await axios.delete('http://localhost:8000/api/movies/' + id, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      },
    });
    console.log('apicalls');
    console.log(id);
    dispatch(deleteMoviesSuccess(id));
  } catch (err) {
    dispatch(deleteMoviesFailure());
  }
};

// CREATE
export const createMovies = async (inputs, dispatch) => {
  dispatch(createMoviesStart());
  try {
    const res = await axios.post('http://localhost:8000/api/movies/', inputs);
    console.log('apicalls');
    console.log(res.data);
    dispatch(createMoviesSuccess(res.data));
  } catch (err) {
    dispatch(createMoviesFailure());
  }
};

// UPDATE
export const updateMovies = async (product, id, dispatch) => {
  dispatch(updateMoviesStart());
  try {
    await axios.put('http://localhost:8000/api/movies/' + id, product);
    console.log('apicalls');
    console.log(id);
    console.log(product);
    dispatch(updateMoviesSuccess(id));
  } catch (err) {
    dispatch(updateMoviesFailure());
  }
};
