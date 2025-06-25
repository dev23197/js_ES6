function addNumbers(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  console.log("Sum:", sum);
}

addNumbers(5, 10, 15); 