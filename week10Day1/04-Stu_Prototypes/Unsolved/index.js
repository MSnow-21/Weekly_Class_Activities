// TODO: Add a comment describing what kind of function this is
// This is a constructor function - takes in a series of values and creates an object
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
//This is inheriting properties - as a template - of the Character object
//prototype Associates the method printStates with the Character constructor
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// TODO: Add a comment describing the functionality of this method
// If the hitpoints in the Character properties are greater than 0, the character is still alive
// If the hitpoints in the Character properties is zero, the character has died
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// TODO: Add a comment describing the functionality of this method
// If Character 1 attacks character 2 then character 2's strength points get subtracted
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// TODO: Add a comment describing the functionality of this method
// This adds points from the prototype to the Character values for the level up function.
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console
// const warrior values will be called to the printStats function which takes properties from Character..
// object and adds the stats. 
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
// Calls function which determines whether the hitpoints are greater than 0.
warrior.isAlive();

rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
// const roque values will be entered into print stats function. Char
rogue.printStats();
