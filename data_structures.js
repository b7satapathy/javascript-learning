'use strict';

const restaurant = {
  rname: 'gopal hotel',
  rlocation: 'CDA, Cuttack, Odisha',
  Categories: ['Odia Special', 'Veg', 'non-veg', 'snacks'],
  starterMenu: ['salad', 'onion rings', 'curd'],
  mainMenu: ['bhata', 'dali', 'alu bhaja'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [starter, mainCourse] = restaurant.order(1, 2);
console.log(starter, mainCourse);

const { rname, rlocation } = restaurant;
console.log(rname, rlocation);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7 };
console.log(a, b);
console.log(obj);
({ a, b } = obj);
console.log(a, b);

const { openingHours } = restaurant;
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

const myName = 'biswajit';
const letters = [...myName];
console.log(letters);
