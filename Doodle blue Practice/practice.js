console.log("One")
setTimeout(()=> console.log("Two"),500)
console.log("Three")

console.log("Registration received")
setTimeout(()=> console.log("Registration confirmed"),2000)

console.log("start") //Synchronous
setTimeout(()=>console.log("timer"),0) //Macrotask → timer
Promise.resolve().then(()=>console.log("Promise")) //Microtask → Promise
console.log("finish") //Synchronous


