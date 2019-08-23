function timeout(ms) {
    return new Promise(function(resolve,reject) {
        if(ms>1000) {
            resolve("ms大于1000");
        }else{
            reject("ms小于1000");
        }
    })
}

timeout(15000)
.then(function(success){
    console.log(success);
},function(failure) {
    console.log(failure);
})