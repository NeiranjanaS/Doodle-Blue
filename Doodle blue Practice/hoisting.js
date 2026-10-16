var a
console.log(a)
a=10

console.log(a)
var a=10

let a1
console.log(a1)
a=10

//Temporal dead zone(TDZ)
//const b
//console.log(b)
//b=20

greet()
function greet(){
    console.log("print")
}

const res = () => {
    console.log("Hi!")
}
console.log(res)
res()