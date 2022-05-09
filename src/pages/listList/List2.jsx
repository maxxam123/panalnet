import './list2.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
// import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ListContext } from '../../context/listContext/ListsContext';
// import getMovies from '../../context/movieContext/apiCalls';
import { deleteMovies, getMovies } from '../../context/movieContext/apiCalls';
import axios from 'axios';
import { deleteLists, getLists } from '../../context/listContext/apiCalls';

export const List2 = () => {
  // const [data, setData] = useState(productRows);
  const [user, setUser] = useState('');
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteLists(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'title', headerName: 'Title', width: 230 },
    { field: 'genre', headerName: 'Genre', width: 130 },
    { field: 'type', headerName: 'Type', width: 130 },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: '/list/' + params.row._id, list: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

// getRowId={(row) => row._id}
