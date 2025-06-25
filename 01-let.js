
// let variable allows you to declare a variable with block scope 

let x = 10;
{
  let x = 20; 
  console.log(x); 
}
console.log(x); 