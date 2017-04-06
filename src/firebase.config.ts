import firebase from 'firebase'

export default ():void => {
  firebase.initializeApp({
    apiKey: "AIzaSyAk-ixcDduRZp3wLCHbY9uQNTMzk0irWXs",
    authDomain: "track-one.firebaseapp.com",
    databaseURL: "https://track-one.firebaseio.com",
    projectId: "track-one",
    storageBucket: "track-one.appspot.com",
    messagingSenderId: "564157443583"
  })
}
