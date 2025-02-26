const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        // to send the data by resolve to then use this
         resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})
