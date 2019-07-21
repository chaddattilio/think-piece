import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZZdrGnC_YeNRg3ZAd_F7G02fnoot9UcI",
  authDomain: "think-piece-52529.firebaseapp.com",
  databaseURL: "https://think-piece-52529.firebaseio.com",
  projectId: "think-piece-52529",
  storageBucket: "",
  messagingSenderId: "278997212288",
  appId: "1:278997212288:web:e2729cf6f9836793"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export default firebase;