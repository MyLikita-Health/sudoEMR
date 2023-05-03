import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAMb4cDt1Z5OTkJx5auZB1DFXs3tH6-U0s',
  authDomain: 'my-likita.firebaseapp.com',
  databaseURL: 'https://my-likita.firebaseio.com',
  projectId: 'my-likita',
  storageBucket: 'my-likita.appspot.com',
  messagingSenderId: '511067153717',
  appId: '1:511067153717:web:5904491abb307135',
};

var fire = firebase.initializeApp(firebaseConfig);
export default fire;
