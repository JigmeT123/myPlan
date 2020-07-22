export const signIn = (credential) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credential.email,
            credential.password
        ).then(()=>{
           dispatch({type: "LOGIN_SUCCESS"})
        }
        ).catch(err => {
            dispatch({type: "LOGIN_ERROR"}, err);    
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type: "LOG_OUT_SUCCESS"})
        });
    }
}

export const signUp = (newUsers) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUsers.email,
            newUsers.password
        ).then(response => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUsers.firstName,
                lastName: newUsers.lastName,
                initials: newUsers.firstName[0] + newUsers.lastName[0]
            })
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch(err=>{
            dispatch({type: 'SIGNUP_ERROR', err}) 
        })
    }
}

