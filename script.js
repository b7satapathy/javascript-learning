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
