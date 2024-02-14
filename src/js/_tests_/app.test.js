// прописать import все файлы JS
import Character from '../Character';
import Daemon from '../Daemon';
import Magician from '../Magician';
// начать тесты

const player = new Character('Niki', 'Daemon');

test('class Character', () => {
  expect(player).toEqual({
    name: 'Niki',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  });
});

test('Неверное имя', () => {
  expect(() => new Character('R', 'Undead')).toThrow();
});
test('Неверный тип', () => {
  expect(() => new Character('Ron', 'noType')).toThrow();
});

test('Верный ввод Daemon', () => {
  const received = new Daemon('Ron', 'Daemon');
  const expected = {
    name: 'Ron',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Верный ввод Magician', () => {
  const received = new Magician('Ron', 'Magician');
  const expected = {
    name: 'Ron',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});
