document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();

    const db = firebase.firestore();

    const truthPost = db.collection('voting');

    // const truthTextField = document.querySelector("#textTruth");
    // const shareTruthButton = document.querySelector("#shareTruth");
    const vote1 = document.querySelector("#vote1");
    const vote2 = document.querySelector("#vote2");
    const vote3 = document.querySelector("#vote3");
    const vote4 = document.querySelector("#vote4");
    const vote5 = document.querySelector("#vote5");
    const vote6 = document.querySelector("#vote6");
    

    vote1.addEventListener("click", function () {
        // const truthTextShare = truthTextField.value;
        truthPost.add({
            candidate: "Butter Water II"
        }).then(function () {
            // var j = confirm("Thank You for answering these\nexciting and personal questions!");
            // if (j == true) {
                // window.alert("This post was successfully shared!");
                document.location.href = "thankyou.html";
                // onclick="window.location.href='thankyou.html';"
            // } else {
                // console.log("error");
            // }
            // console.log("status saved");
        }).catch(function (error) {
            console.log("got an error:", error);
        });
    })
    vote2.addEventListener("click", function () {
        // const truthTextShare = truthTextField.value;
        truthPost.add({
            candidate: "Radish R. Washe"
        }).then(function () {
            // var j = confirm("Thank You for answering these\nexciting and personal questions!");
            // if (j == true) {
                // window.alert("This post was successfully shared!");
                document.location.href = "thankyou.html";
                // onclick="window.location.href='thankyou.html';"
            // } else {
                // console.log("error");
            // }
            // console.log("status saved");
        }).catch(function (error) {
            console.log("got an error:", error);
        });
    })
    vote3.addEventListener("click", function () {
        // const truthTextShare = truthTextField.value;
        truthPost.add({
            candidate: "Lettuce Divign"
        }).then(function () {
            // var j = confirm("Thank You for answering these\nexciting and personal questions!");
            // if (j == true) {
                // window.alert("This post was successfully shared!");
                document.location.href = "thankyou.html";
                // onclick="window.location.href='thankyou.html';"
            // } else {
                // console.log("error");
            // }
            // console.log("status saved");
        }).catch(function (error) {
            console.log("got an error:", error);
        });
    })
    vote4.addEventListener("click", function () {
        // const truthTextShare = truthTextField.value;
        truthPost.add({
            candidate: "Pumpkin Silkin"
        }).then(function () {
            // var j = confirm("Thank You for answering these\nexciting and personal questions!");
            // if (j == true) {
                // window.alert("This post was successfully shared!");
                document.location.href = "thankyou.html";
                // onclick="window.location.href='thankyou.html';"
            // } else {
                // console.log("error");
            // }
            // console.log("status saved");
        }).catch(function (error) {
            console.log("got an error:", error);
        });
    })
    vote5.addEventListener("click", function () {
        // const truthTextShare = truthTextField.value;
        truthPost.add({
            candidate: "Onion G. Leek"
        }).then(function () {
            // var j = confirm("Thank You for answering these\nexciting and personal questions!");
            // if (j == true) {
                // window.alert("This post was successfully shared!");
                document.location.href = "thankyou.html";
                // onclick="window.location.href='thankyou.html';"
            // } else {
                // console.log("error");
            // }
            // console.log("status saved");
        }).catch(function (error) {
            console.log("got an error:", error);
        });
    })
    vote6.addEventListener("click", function () {
        // const truthTextShare = truthTextField.value;
        truthPost.add({
            candidate: "Kale Kale"
        }).then(function () {
            // var j = confirm("Thank You for answering these\nexciting and personal questions!");
            // if (j == true) {
                // window.alert("This post was successfully shared!");
                document.location.href = "thankyou.html";
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