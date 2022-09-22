document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();

    const db = firebase.firestore();

    const truthPost = db.collection('register');

    const submit = document.querySelector('#submitform');

    // const truthTextField = document.querySelector("#textTruth");
    // const shareTruthButton = document.querySelector("#shareTruth");
    const consume = document.querySelector("#consume");
    const consumes = document.querySelector("#consumes");
    const citizen = document.querySelector("#citizen");
    const possibility = document.querySelector("#possibility");
    const better = document.querySelector("#better");
    const believe = document.querySelector("#believe");
    const date = document.querySelector("#date");
    const favorite = document.querySelector("#favorite");
    

    submit.addEventListener("click", function () {
        const consumed = consume.value;
        const consumesd = consumes.value;
        const citizend = citizen.value;
        const possibilityd = possibility.value;
        const betterd = better.value;
        const believed = believe.value;
        const dated = date.value;
        const favorited = favorite.value;
        
        truthPost.add({
            consumev: consumed,
            consumesea: consumesd,
            citizenw: citizend,
            possibilityo: possibilityd,
            betterw: betterd,
            believea: believed,
            datet: dated,
            favoritev: favorited,
            

        }).then(function () {
            // var j = confirm("Thank You for answering these\nexciting and personal questions!");
            // if (j == true) {
                // window.alert("This post was successfully shared!");
                document.location.href = "candidate.html";
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