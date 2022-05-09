// GET
export const getMoviesStart = () => ({
  type: 'GET_MOVIES_START',
});

export const getMoviesSuccess = (movies) => ({
  type: 'GET_MOVIES_SUCCESS',
  payload: movies,
});

export const getMoviesFailure = () => ({
  type: 'GET_MOVIES_FAILURE',
});

// DELETE
export const deleteMoviesStart = () => ({
  type: 'DELETE_MOVIES_START',
});

export const deleteMoviesSuccess = (id) => ({
  type: 'DELETE_MOVIES_SUCCESS',
  payload: id,
});

export const deleteMoviesFailure = () => ({
  type: 'DELETE_MOVIES_FAILURE',
});

// CREATE
export const createMoviesStart = () => ({
  type: 'CREATE_MOVIES_START',
});

export const createMoviesSuccess = (movie) => ({
  type: 'CREATE_MOVIES_SUCCESS',
  payload: movie,
});

export const createMoviesFailure = () => ({
  type: 'CREATE_MOVIES_FAILURE',
});

// UPDATE
export const updateMoviesStart = () => ({
  type: 'CREATE_UPDATE_START',
});

export const updateMoviesSuccess = (id) => ({
  type: 'CREATE_UPDATE_SUCCESS',
  payload: id,
});

export const updateMoviesFailure = () => ({
  type: 'CREATE_UPDATE_FAILURE',
});
