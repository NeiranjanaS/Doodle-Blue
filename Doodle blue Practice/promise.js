const myPromise=new Promise(function(resolve, reject){
    let paysuccess=true;
    if(paysuccess){
        resolve("Payment successful");
    }else{
        reject("Payment failed");
    }
});
myPromise.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
});
