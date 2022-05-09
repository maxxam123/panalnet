const MovieReducer = (state, action) => {
  switch (action.type) {
    case 'GET_MOVIES_START':
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    case 'GET_MOVIES_SUCCESS':
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };
    case 'GET_MOVIES_FAILURE':
      return {
        movies: [],
        isFetching: false,
        error: true,
      };

    // DELETE
    case 'DELETE_MOVIES_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'DELETE_MOVIES_SUCCESS':
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case 'DELETE_MOVIES_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    // CREATE
    case 'CREATE_MOVIES_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'CREATE_MOVIES_SUCCESS':
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    case 'CREATE_MOVIES_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    // UPDATE
    case 'CREATE_UPDATE_START':
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case 'CREATE_UPDATE_SUCCESS':
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };
    case 'CREATE_UPDATE_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default MovieReducer;
