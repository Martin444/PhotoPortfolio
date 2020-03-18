import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database';
import 'firebase/storage'

 const Config = {
          apiKey: "AIzaSyCRk04-6LeScTVwdZGjripX5WMC2IKksDk",
          authDomain: "photostore-5a2d4.firebaseapp.com",
          databaseURL: "https://photostore-5a2d4.firebaseio.com",
          projectId: "photostore-5a2d4",
          storageBucket: "photostore-5a2d4.appspot.com",
          messagingSenderId: "1095478456601",
          appId: "1:1095478456601:web:8bcbab9ba99552e3f75588",
          measurementId: "G-R02GXJJHE0"
  };

  firebase.initializeApp(Config);

  export const { auth } = firebase;
  export const storage = firebase.storage();
  export const database = firebase.database();

  export const provider = new firebase.auth.FacebookAuthProvider();