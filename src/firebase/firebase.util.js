import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCBqrwKRPnR8x91g1y0RiQ60xt9HPf6NN4",
    authDomain: "my-clothing-6c6a6.firebaseapp.com",
    databaseURL: "https://my-clothing-6c6a6.firebaseio.com",
    projectId: "my-clothing-6c6a6",
    storageBucket: "my-clothing-6c6a6.appspot.com",
    messagingSenderId: "462571377277",
    appId: "1:462571377277:web:e6a4619906ba818b7dd714",
    measurementId: "G-XTXK9K8JEK"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const shapShot = await userRef.get();

    if (!shapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log( 'error creating user '. error.message );
        }
    }
    return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const SignInWithGoogle = () => { auth.signInWithPopup(provider) };


export default firebase;
