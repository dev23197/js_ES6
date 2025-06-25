//The ... (three dots) is called the spread operator, and it is used to spread 
// the elements of an array or object into individual elements.
//



// const obj1 = {
//   name: "dev",
//   city: "vrindavan"
// }

// const obj2 = {
//   age: 18,
//   country: "india"
// }

// const newobj = { ...obj1 , ...obj2 }

// console.log(newobj);



// const numbers = [45, 74, 84, 63]

// let max= Math.max(...numbers);
// let min= Math.min(...numbers);

// console.log(min , max);



const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year);