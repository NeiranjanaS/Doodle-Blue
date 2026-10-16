//Synchronise
console.log("a")
console.log()
console.log("b")

//Asynchronise
console.log("start")
setTimeout(function() {
    console.log("set ready")
}, 2000)
console.log("end")