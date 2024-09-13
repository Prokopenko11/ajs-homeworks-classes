import Character from '../character';
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Daemon from '../daemon';
import Zombie from '../zombie';

/* eslint-disable no-new */
test('should throw an error for invalid name length', () => {
  expect(() => {
    new Undead('I');
  }).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('should throw an error for invalid character type', () => {
  expect(() => {
    new Character('Alexandr', 'Warrior');
  }).toThrow('Некорректный тип');
});
/* eslint-enable no-new */

test('should throw an error for health less than 0', () => {
  expect(() => {
    const bowman = new Bowman('Ivan');
    bowman.health = 0;
    bowman.levelUp();
  }).toThrow('Нельзя повысить уровень умершего персонажа');
});

test('should level up character', () => {
  const bowman = new Bowman('Ivan');
  bowman.levelUp();
  expect(bowman.level).toBe(2);
});

test('should increase attack', () => {
  const swordsman = new Swordsman('Danila');
  swordsman.levelUp();
  expect(swordsman.attack).toBe(48);
});

test('should increase defence', () => {
  const magician = new Magician('Petr');
  magician.levelUp();
  expect(magician.defence).toBe(48);
});

test('health has to be 100', () => {
  const daemon = new Daemon('Alex');
  daemon.levelUp();
  expect(daemon.health).toBe(100);
});

test('testing damage method: health bigger than 0', () => {
  const zombie = new Zombie('Nikita');
  zombie.damage(10);
  expect(zombie.health).toBe(91);
});

test('testing damage method: health smaller than 0', () => {
  const undead = new Undead('George');
  undead.damage(200);
  expect(undead.health).toBe(0);
});

test('testing damage method: health is 0', () => {
  const daemon = new Daemon('Alex');
  daemon.health = 0;
  daemon.damage(50);
  expect(daemon.health).toBe(0);
});
