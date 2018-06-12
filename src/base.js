import Rebase from 're-base';
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDR_oiUHj70PcVAzQ4DB7yCF9TDbU0oqhs",
    authDomain: "catch-of-the-day-abey.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-abey.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;