import { Link } from 'react-router-dom';
// import { Chart } from '../../components/chart/Chart';
import './product.css';
// import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useMemo, useState } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { updateMovies } from '../../context/movieContext/apiCalls';

export const Product = () => {
  const location = useLocation();
  const movie = location.movie;
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const [color, setColor] = useState([]);
  const [cate, setCate] = useState([]);
  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(','));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setCate(progress);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log({
            ...inputs,
            img: downloadURL,
            categories: cat,
            _id: movie._id,
            // color: color,
          });
          const product = {
            ...inputs,
            img: downloadURL,
            categories: cat,
            _id: movie._id,
            // color: color,
          };
          // createMovies(product, dispatch)
          console.log('inputs');
          console.log(product);
          // createMovies(product, movie._id dispatch);
          updateMovies(product, movie._id, dispatch);
        });
      }
    );
  };

  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       const res = await userRequest.get('order/income?pid=' + productId);
  //       res.data.map((item) =>
  //         setPStats((prev) => [
  //           ...prev,
  //           { name: MONTHS[item._id - 1], Sales: item.total },
  //         ])
  //       );
  //     } catch (err) {}
  //   };
  //   getStats();
  // }, [productId, MONTHS]);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">
              Title {': '}
              {movie.title}
            </span>
          </div>
          <div className="productInfoTop">
            <span className="productName">
              Id {': '}
              {movie._id}
            </span>
          </div>
          {/* <div className="productInfoTop">
            <span className="productName">
              Color {': '}
              {movie.color[0]}
              {', '}
              {movie.color[1]}
              {', '}
            </span>
          </div> */}
          {/* <div className="productInfoTop">
            <span className="productName">
              Size {': '}
              {movie.size[0]}
              {', '}
              {movie.size[1]}
              {', '}
            </span>
          </div> */}
          {/* <div className="productInfoTop">
            <span className="productName">
              Categories {': '}
              {movie.categories[0]}
              {', '}
              {movie.categories[1]}
              {', '}
            </span>
          </div> */}
          <div className="producttInfoBottom"></div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Name</label>
            <input
              type="text"
              placeholder="title"
              name="title"
              onChange={handleChange}
            />
            <label>Movie Description</label>
            <input
              type="text"
              placeholder="desc"
              name="desc"
              onChange={handleChange}
            />
            <label>Movie Price</label>
            <input
              type="text"
              placeholder="price"
              name="price"
              onChange={handleChange}
            />
            <div className="addProductItem">
              <label>Categories</label>
              <input
                type="text"
                placeholder="jeans, skirts"
                onChange={handleCat}
              />
            </div>
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                className="productUploadImg"
                src={file || movie.img}
                alt=""
              />
              <label for="file">
                <Publish />
              </label>
              <input
                name="img"
                type="file"
                id="file"
                style={{ display: 'none' }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button onClick={handleClick} className="productButton">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
