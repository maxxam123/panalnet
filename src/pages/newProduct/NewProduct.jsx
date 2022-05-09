import { useContext, useState } from 'react';
import './newProduct.css';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import { createMovies } from '../../context/movieContext/apiCalls';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { useHistory } from 'react-router-dom';

export const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [inputs1, setInputs1] = useState({});
  const [inputs2, setInputs2] = useState({});
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);
  const [video, setVideo] = useState(null);
  const [cate, setCate] = useState([]);
  const { dispatch } = useContext(MovieContext);
  const [upload, setUpload] = useState('0');
  const history = useHistory();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
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
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log({
            ...inputs,
            trailer: downloadURL,
          });
          const product = {
            ...inputs,
            trailer: downloadURL,
          };
          setInputs(product);
          console.log('inputs');
          console.log(product);
          console.log(inputs);
          setUpload('1');
          console.log('upload');
          console.log(upload);
          // createMovies(product, dispatch);
        });
      }
    );
  };

  const handleClick1 = (e) => {
    e.preventDefault();

    const fileName1 = new Date().getTime() + video.name;
    const storage1 = getStorage(app);
    const storageRef1 = ref(storage1, fileName1);
    const uploadTask1 = uploadBytesResumable(storageRef1, video);

    uploadTask1.on(
      'state_changed',
      (snapshot) => {
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
      (error) => {},
      () => {
        getDownloadURL(uploadTask1.snapshot.ref).then((downloadURL) => {
          console.log({
            ...inputs,
            video: downloadURL,
          });
          const product = {
            ...inputs,
            video: downloadURL,
          };
          setInputs(product);
          setUpload('2');
          console.log('upload');
          console.log(upload);
          // setInputs1({ ...inputs, video: downloadURL });
          console.log('product');
          console.log(product);
          console.log('inputs');
          console.log(inputs);
          // createMovies(product, dispatch);
        });
      }
    );
  };

  const handleClick2 = (e) => {
    e.preventDefault();

    const fileName2 = new Date().getTime() + img.name;
    const storage2 = getStorage(app);
    const storageRef2 = ref(storage2, fileName2);
    const uploadTask2 = uploadBytesResumable(storageRef2, img);

    uploadTask2.on(
      'state_changed',
      (snapshot) => {
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
      (error) => {},
      () => {
        getDownloadURL(uploadTask2.snapshot.ref).then((downloadURL) => {
          console.log({
            ...inputs,
            img: downloadURL,
          });
          const product = {
            ...inputs,
            img: downloadURL,
          };
          setInputs(product);
          setUpload('3');
          // setInputs1({ ...inputs, video: downloadURL });
          console.log('product');
          console.log(product);
          console.log('inputs');
          console.log(inputs);
          createMovies(product, dispatch);
          // setUpload('0');
          // history.push('/');
          history.push('/Products');
          // window.location.reload(false);
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="John Wick"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            name="year"
            type="text"
            placeholder="year"
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
          <label>Limit</label>
          <input
            name="limit"
            type="text"
            placeholder="limit"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>is Series?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="true">yes</option>
            <option value="false">no</option>
          </select>
        </div>
        <div className="addProductItem">
          {upload === '0' && (
            <>
              <label>Video</label>
              <input
                type="file"
                name="video"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button onClick={handleClick} className="addProductButton">
                Upload video
              </button>
            </>
          )}
        </div>
        <div className="addProductItem">
          {upload === '1' && (
            <>
              <label>Trailer</label>
              <input
                type="file"
                name="trailer"
                onChange={(e) => setVideo(e.target.files[0])}
              />
              <button onClick={handleClick1} className="addProductButton">
                Upload trailer
              </button>
            </>
          )}
        </div>
        <div className="addProductItem">
          {upload === '2' && (
            <>
              <label>Image</label>
              <input
                name="img"
                type="file"
                id="img"
                onChange={(e) => setImg(e.target.files[0])}
              />
              <button onClick={handleClick2} className="addProductButton">
                Upload image
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
