// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//   document.getElementById("demo").innerHTML += x + "<br>";
// }


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//   console.log(x); 
// }


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// let text = "";
// for (let x of keys) {
//   console.log(x);
// }



const numbers = [25, 73, 74, 85, 95, 75,101,84747 ]
let second = numbers.find(myFunction);
function myFunction (value , index , array ){
  return value > 39;
}
console.log(second);