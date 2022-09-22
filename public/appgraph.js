document.addEventListener("DOMContentLoaded", event => {

const app = firebase.app();


const db = firebase.firestore();

db.collection('voting').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data())
    })
})

})