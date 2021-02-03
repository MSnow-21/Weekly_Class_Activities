// Array.prototype.forEach()
const myArray = [2, 4, 6, 8];

myArray.forEach((num) => console.log(num));

//testing another

const secondArray = [3,6,9,12,15];

secondArray.forEach((num) => console.log(num));

// String.prototype.toLowerCase()
const person = {
  name: 'Eric',
  age: 28,
  occupation: 'Full-Stack Web Developer',
};

//Testing another

const personTwo = {
  name: 'Sean',
  age: 43,
  occupation: 'Technical Sales Lead'
}

console.log(person.occupation.toLowerCase());

console.log(personTwo.occupation.toLowerCase());

// Prototype methods on constructor function
function Movie(title, releaseYear) {
  this.title = title;
  this.releaseYear = releaseYear;
}

const superman = new Movie('Superman', 1978);

Movie.prototype.logInfo = function () {
  console.log(`${this.title} was released in ${this.releaseYear}`);
};

superman.logInfo();
