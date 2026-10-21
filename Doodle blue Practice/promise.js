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

//marks greater and lesser than 50
const myPromise1=new Promise(function(resolve, reject){
    const marks=85;
    if(marks>=50){
        resolve("Admission approved");
    }else{
        reject (new Error("Admission rejected"));
    }
});

myPromise1
.then((result)=> console.log(result))
.catch((error)=> console.log(error))
.finally(()=> console.log("Admission completed"))

//lets compare the microtasks and macrotasks
console.log("A")
setTimeout(()=>{
    console.log("B")
},0)
Promise.resolve().then(()=>{
    console.log("C")
})

console.log("D")

//async and await
function getData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data received!");
        },2000);
    });
}
async function displayData(){
    console.log("start")
    const result=await getData()
    console.log(result)
    console.log("End")
}
displayData();

function checkStock(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (item === "shoes") resolve("In stock");
      else reject("Out of stock");
    }, 500);
  });
}

async function buyItem() {
  try {
    const status = await checkStock("shirt");
    console.log(status);
  } catch (err) {
    console.log("Error:", err);
  }
}
buyItem();

function sayHello() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello!"), 1000);
  });
}

async function greet() {
  console.log("Before");
  const message = await sayHello();
  console.log(message);
  console.log("After");
}
greet();
console.log("Outside");

