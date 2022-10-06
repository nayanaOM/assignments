function getVideo(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(getVideo()){
                resolve("Got Video")
            }else{
                reject("Dint got video")
            }
            },3000)
        })
    }
let methodForResolve=(result)=>{
    console.log("Message After Resolve="+result);
}
let methodForReject=(result)=>{
    console.log("Message After Reject="+reject);
}
function addIntro(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(addIntro()){
                resolve("Intro not added")
            }else{
                reject("Intro ot added")
            }
        },3000);
    })
}
function addSummary(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(addSummary()){
                resolve("summary added")
            }else{
                reject("summary not added")
            }
        },3000);
    })
}
getVideo().then(methodForResolve).catch(methodForReject);
addIntro().then(methodForResolve).catch(methodForReject);
addSummary().then(methodForResolve).catch(methodForReject);