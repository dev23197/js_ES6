// arrow function

const person = {
  name: "Dev",
  class: function () {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};
person.class();


