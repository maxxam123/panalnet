import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext/UserContext';
import './newUser.css';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import { createUser } from '../../context/userContext/apiCalls';

export const NewUser = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const { dispatch } = useContext(UserContext);

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
        setCat(progress);
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
          console.log({ ...inputs, img: downloadURL });
          const product = { ...inputs, img: downloadURL };
          // createMovies(product, dispatch)
          console.log('inputs');
          console.log(product);
          createUser(product, dispatch);
        });
      }
    );
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            name="title"
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            placeholder="john"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="John Smith"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Software engineer"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="johnsmith99"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Birth</label>
          <input
            type="text"
            name="birth"
            placeholder="10.10.1995"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Admin</label>
          <input
            type="text"
            name="isAdmin"
            placeholder="true or false"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="text"
            name="password"
            placeholder="John Smith"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick} className="addProductButton">
          Upload
        </button>
      </form>
      <div className="test">progress: {cat}</div>
    </div>
  );
};
