/* eslint-disable import/prefer-default-export */
// TODO: write your code here

export function Character(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
}

Character.prototype = {
    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}

const bobik = new Character('Bobik', 'Type');
console.log(bobik.health);
bobik.damage(1100);
console.log(bobik.health);
bobik.damage(110);
console.log(bobik.health);
bobik.damage(110);
console.log(bobik.health);