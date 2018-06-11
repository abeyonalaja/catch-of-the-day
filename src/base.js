import Rebase from 're-base';
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    authDomain: "catch-of-the-day-abey.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-abey.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;