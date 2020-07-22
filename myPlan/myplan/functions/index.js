const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions
    .https
    .onRequest((request, response) => {
        response.send("Hello, Ninjas");
    });

const createNotification = (notification => {
    return admin
        .firestore()
        .collection('notifications')
        .add(notification)
        .then(doc => {
            console.log('notification added', doc);
        })
})

exports.projectCreated = functions
    .firestore
    .document('projects/{projectId}')
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content: ' Added New Project',
            user: `${project.authFirstName} ${project.authLastName}`,
            time: admin
                .firestore
                .FieldValue
                .serverTimestamp()
        }
        return createNotification(notification);
    });

exports.userJoined = functions
    .auth
    .user()
    .onCreate(user => {
        return admin.firestore().collection('users').doc(user.uid).get({
            
        }).then(doc=>{
            const newUsers = doc.data();
            const notification = {
                content: " Joined the community",
                user : `${newUsers.firstName} ${newUsers.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()   
            }

            return createNotification(notification)
        });
    })