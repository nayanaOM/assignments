async function myfunction(){
    function getVideo(){
        console.log("Got video");

    }
    function AddIntro(){
        return console.log("Intro Added");

    }
    function AddSummary(){
        return console.log("summary Added");
    }
    getVideo();
    await AddIntro();
    
    AddSummary();
}
myfunction();
console.log("await..");
