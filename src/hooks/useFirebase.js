import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();


const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const googleProvider = new GoogleAuthProvider();



    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                setError(error.message)
            });
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            }
            else {
                setUser({});
            }
        });
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                // An error happened.
            });
    }


    return {
        signInWithGoogle,
        user,
        error,
        logOut
    }

};

export default useFirebase;