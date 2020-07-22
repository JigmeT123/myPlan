export const createProject = (project) => {
    return (dispatch, getState, { getFirestore}) => {
       //make async call to database
       const firestore = getFirestore();
       const profile = getState().firebase.profile;
       const authId = getState().firebase.auth.uid;
       firestore.collection('projects').add({
           ...project,
          authFirstName: profile.firstName,
          authLastName: profile.lastName,
          authorId: authId,
          createdAt: new Date()
       }).then(() => {
        dispatch({type:'CREATE_PROJECT', project}); 
       }).catch((err)=>{
        dispatch({type: "CREATE_PROJECT_ERROR", err});
       })
      
    }
}

