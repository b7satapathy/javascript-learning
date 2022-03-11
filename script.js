'use strict';

function biswajit() {
  let output = 'javascript';
  if (typeof 5 === 'number') {
    output = 'Scope Javascript';
  }

  console.log(output);
}

biswajit();
console.log(typeof 5);

const calcAgeArrow = birthyear => {
  console.log(2022 - birthyear);
  console.log(this);
};

calcAgeArrow(1992);

const firstName = 'Biswajit';
const jonas = {
  firstName: 'Jonas',
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();

const firstNameTwo = 'Biswajit';
const biswajit2 = {
  firstName: 'Jonas',
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    const happy = () => {
      console.log(this);
    };
    happy();
  },
};

biswajit2.calcAge();

//argumenst keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 4);

const person = {
  firstName: 'biswa',
  lastname: 'jit',
  age: 30,
};

const personCopy = Object.assign({}, person);
personCopy.lastname = 'satapathy';

console.log(personCopy);
