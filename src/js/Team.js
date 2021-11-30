import Person from './Person';

export default class Team {
  constructor(...rest) {
    this.characters = [];
    this.characters.push(...rest);
  }


  * [Symbol.iterator]() {
    for (const char of this.characters) {
      yield char;
    }
  }
}

const bowerman = new Person('Лучник', 'Bowman');
const zombie = new Person('Маг', 'Zombie');
const daemon = new Person('Рыцарь', 'Daemon');
const team = new Team(bowerman, zombie, daemon);

for (const item of team) {
  console.log(item);
}
