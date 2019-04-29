class Weapon {
	constructor(name, attack, durability, range) {
		this.name =name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
	}

  //нанесение повреждения
  takeDamage(damage) {
    //!!!!!!этот пуш добавляет первое значение, но не последнее
    durabilityArray.push(this.durability);
    this.durability = this.durability - damage;
	  if (this.durability < 0) {
      this.durability = 0;
	    return;	
	  }
    //!!!!!этот пуш добавляет последнее значение, но не первое
    durabilityArray.push(this.durability);
    return;	
  }
// расчет урона от оружия в зависимости от повреждения
  getDamage() {
   let i = durabilityArray.length;
   if ((durabilityArray[i] / durabilityArray[0]) >= 0.3) {
    this.attack = this.attack;
    return;
    } else {
    this.attack = this.attack / 2;
    return;
   }
  }

  //проверка сломано ли оружие
  isBroken() {
    if (this.durability > 0) {
      return false;
    }
    return true;
  }
}
let durabilityArray = [];

class Hand extends Weapon {
}
class Bow extends Weapon {
}
class Sword extends Weapon {
}
class Knife extends Weapon {
}
class Stick extends Weapon {
}


class LongBow extends Bow {
}
class AX extends Sword {
}
class StormStick extends Stick {
}

const hand = new Hand('Рука', 1, Infinity, 1);
const bow = new Bow('Лук', 10, 200, 3);
const sword = new Sword('Меч', 25, 500, 1);
const knife = new Knife('Нож', 5, 300, 1);
const stick = new Stick('Посох', 8, 300, 2);

const longBow = new LongBow('Длинный лук', 15, 200, 4);
const ax = new AX('Секира', 27, 800, 1);
const stormStick = new StormStick('Посох Бури', 10, 300, 3);

