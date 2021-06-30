import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCvL7pS4hKznpUNONDVCLo9a7YJVETbilY",
    authDomain: "chatterbox-58069.firebaseapp.com",
    projectId: "chatterbox-58069",
    storageBucket: "chatterbox-58069.appspot.com",
    messagingSenderId: "910762361157",
    appId: "1:910762361157:web:9f6fd4a112cdf8f105be2c"
  }).auth();