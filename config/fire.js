import firebase from 'firebase';

 
var firebaseConfig = {
  apiKey: "AIzaSyDUb_eWNJajoWsMywpeCwUBI_qtA5v74D4",
  authDomain: "pcosbuddy-8b21a.firebaseapp.com",
  databaseURL: "https://pcosbuddy-8b21a.firebaseio.com",
  projectId: "pcosbuddy-8b21a",
  storageBucket: "pcosbuddy-8b21a.appspot.com",
  messagingSenderId: "155820507961",
  appId: "1:155820507961:web:2bddd7b1473cd1f4609ee8"
};



const fire = firebase.initializeApp(firebaseConfig);
export default fire;
