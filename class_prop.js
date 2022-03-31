class Person {
  #job = 'Quality Engineer';
  #location = 'Bangalore';
  #hobbey;

  constructor(fullName, birthYear, hobbey) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.#hobbey = hobbey;
  }

  bio() {
    console.log(
      `${this.fullName} is working as ${this.#job} at ${
        this.#location
      } and likes ${this.#hobbey}`
    );
  }
}

class Student extends Person {
  constructor(fullName, birthYear, hobbey, course) {
    super(fullName, birthYear, hobbey);
    this.course = course;
  }

  introduce() {
    console.log(
      `${this.fullName} is ${2037 - this.birthYear} years old and studying ${
        this.course
      }`
    );
  }
}

const jonas = new Student('Jonas', 1991, 'bike riding', 'CS');
jonas.introduce();
jonas.bio();
