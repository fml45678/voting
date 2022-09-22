document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();

    const db = firebase.firestore();

    const truthPost = db.collection('emails');

    const submit = document.querySelector('#submitform');

    // const truthTextField = document.querySelector("#textTruth");
    // const shareTruthButton = document.querySelector("#shareTruth");
    const consume = document.querySelector("#email");
   
    

    submit.addEventListener("click", function () {
        const consumed = consume.value;
    
        
        truthPost.add({
            email: consumed,
            
            

        }).then(function () {
            // var j = confirm("Thank You for answering these\nexciting and personal questions!");
            // if (j == true) {
                // window.alert("This post was successfully shared!");
                document.location.href = "index.html";
                // onclick="window.location.href='thankyou.html';"
            // } else {
                // console.log("error");
            // }
            // console.log("status saved");
        }).catch(function (error) {
            console.log("got an error:", error);
        });
    })
});    