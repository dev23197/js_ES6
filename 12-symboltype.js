const person = {
  firstname: "dev",
  laastname: "choudhary",
  eyecolor: "brown",
  age: 18
};

let id = Symbol("id");
person [id] = 74653829;

console.log(person);