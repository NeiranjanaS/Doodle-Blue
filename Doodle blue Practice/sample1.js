function display(callback){
  console.log("Hello");
  callback();
}
function message(){
  console.log("Welcome");
}
display(message)

const students =["Dpka", "Karthi", "Sharvani", "Neiran", "Miruthula"];
console.log(students[0], students[4]);
students.push("Priya");
console.log(students);
console.log(students.pop(0,4));
console.log(students.slice(1,3));
students.splice(1,3);
console.log(students);
console.log(students.splice(1,2));
students.splice(1,2);
console.log(students);
console.log(students.includes("Dpka"));

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 800 },
  { name: "Headphones", price: 1200 },
  { name: "Smartwatch", price: 13000 }
];
console.log(products.filter(product => product.price > 1000));
console.log( products.map(product => product.name));
console.log(products.reduce((sum, product) => sum + product.price,0));

