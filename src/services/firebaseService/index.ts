import firebase from 'firebase/app';
import 'firebase/auth';

import { firebaseConfig } from './app-config';
import FirebaseAuth from './FirebaseAuth';

class FirebaseService {
    private static instance: FirebaseService = new FirebaseService();
    private firebaseApp: firebase.app.App;

    private constructor() {

    }

    public getFirebaseAuthApp() {
        return new FirebaseAuth(this.firebaseApp);
    }

    public initializeApp() {
        console.log('firebase reigtered!');
        this.firebaseApp = firebase.initializeApp(firebaseConfig);
    }

    public static getinstance() {
        return this.instance;
    }
}


const object: FirebaseService = FirebaseService.getinstance();

export default object;
