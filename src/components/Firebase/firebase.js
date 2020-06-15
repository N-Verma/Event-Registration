import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBS9jZFXwPMOzhR7NkJ59VbCnnK_CDDYAw",
    authDomain: "admin-form-16a5a.firebaseapp.com",
    databaseURL: "https://admin-form-16a5a.firebaseio.com",
    projectId: "admin-form-16a5a",
    storageBucket: "admin-form-16a5a.appspot.com",
    messagingSenderId: "1011043234471",
}

class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.database();
    }
    //Sign up function
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

    //Sign in function
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
    
    //Log Out
    doSignOut = () => this.auth.signOut();

    // //password reset
    // doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    
    // //password change
    // doPasswordUpdate = password =>
    //   this.auth.currentUser.updatePassword(password);
    user = uid => this.db.ref(`users/${uid}`);
    users = () =>this.db.ref('users')
  }
   
  export default Firebase;