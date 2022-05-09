import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContextProvider } from './context/userContext/UserContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';
// import { AuthContextProvider } from './context/authContext/AuthContext';
// import { SlidersContextProvider } from './context/sliderContext/SlidersContext';
// import { ListContextProvider } from './context/listContext/ListsContext';

ReactDOM.render(
  <React.StrictMode>
    {/* <AuthContextProvider> */}
    <MovieContextProvider>
      <UserContextProvider>
        {/* <ListContextProvider> */}
        <App />
        {/* </ListContextProvider> */}
      </UserContextProvider>
    </MovieContextProvider>
    {/* </AuthContextProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
