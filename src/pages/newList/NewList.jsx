import { useContext, useEffect, useState } from 'react';
import './newList.css';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { useHistory } from 'react-router-dom';
import { ListContext } from '../../context/listContext/ListsContext';
import { createMoviesSuccess } from '../../context/movieContext/MovieActions';
import { getMovies } from '../../context/movieContext/apiCalls';
import { createLists } from '../../context/listContext/apiCalls';

export const NewList = () => {
  const [list, setList] = useState(null);
  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  const history = useHistory();

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  console.log(list);

  const handleSubmit = (e) => {
    e.preventDefault();
    createLists(list, dispatch);
    history.push('/lists');
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="popular movies"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            name="genre"
            type="text"
            placeholder="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Type</label>
          <select name="type" onChange={handleChange}>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Content</label>
          <select
            multiple
            name="content"
            onChange={handleSelect}
            style={{ height: '300px' }}
          >
            {movies.map((movie) => (
              <option key={movie._id} value={movie._id}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>
        <div className="addProductItem">
          <button onClick={handleSubmit} className="addProductButton">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
