import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCy_atrqo-fsVulELbCVte4ulL25twEOEA",
    authDomain: "shop-db-9c67e.firebaseapp.com",
    databaseURL: "https://shop-db-9c67e.firebaseio.com",
    projectId: "shop-db-9c67e",
    storageBucket: "shop-db-9c67e.appspot.com",
    messagingSenderId: "475025273300",
    appId: "1:475025273300:web:6ea6446787320a86d2a641"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    return userRef;

    console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;