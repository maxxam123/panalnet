// Import the functions you need from the SDKs you need
// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
// import 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyBQrVYmBqYYXze7HmjY1CUu681cD1f_0Ho',

  authDomain: 'flix-f6b40.firebaseapp.com',

  projectId: 'flix-f6b40',

  storageBucket: 'flix-f6b40.appspot.com',

  messagingSenderId: '837158825737',

  appId: '1:837158825737:web:6bb31ed4d7749e43466dd8',
};

// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();
const app = initializeApp(firebaseConfig);
export default app;
