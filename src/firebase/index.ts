import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { Platform } from 'react-native';

let databaseURL = "https://fir-d4cd5-default-rtdb.asia-southeast1.firebasedatabase.app";


const firebaseAndroidConfig = {
    apiKey: 'AIzaSyA9gSz9RuHWnEFkqF5I4yELNjqfTkE4_vE',
    authDomain: 'fir-d4cd5.firebaseapp.com',
    databaseURL: databaseURL,
    projectId: 'fir-d4cd5',
    storageBucket: 'fir-d4cd5.appspot.com',
    messagingSenderId: 'sender-id',
    appId: '1:395441164421:android:8c7fcf62bdc71d1d7999ec',
    measurementId: '395441164421',
}
const firebaseConfig = Platform.OS=="android"?firebaseAndroidConfig:{}

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default ()=> {
  return {
    firebase, 
    auth,
    databaseURL,
  }
}