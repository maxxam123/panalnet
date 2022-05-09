import axios from 'axios';
import {
  createListsFailure,
  createListsStart,
  createListsSuccess,
  deleteListsFailure,
  deleteListsStart,
  deleteListsSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from './ListsActions';

// GET
export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get('http://localhost:8000/api/lists/');
    console.log('apicalls');
    console.log(res.data);
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

// DELETE
export const deleteLists = async (id, dispatch) => {
  dispatch(deleteListsStart());
  try {
    await axios.delete('http://localhost:8000/api/lists/' + id);
    console.log('apicalls');
    console.log(id);
    dispatch(deleteListsSuccess(id));
  } catch (err) {
    dispatch(deleteListsFailure());
  }
};

// CREATE
export const createLists = async (list, dispatch) => {
  dispatch(createListsStart());
  try {
    const res = await axios.post('http://localhost:8000/api/lists/', list);
    console.log('apicalls');
    console.log(res.data);
    dispatch(createListsSuccess(res.data));
  } catch (err) {
    dispatch(createListsFailure());
  }
};
