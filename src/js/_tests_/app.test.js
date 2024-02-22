// прописать import все файлы JS
import Daemon from '../Daemon';
import Magician from '../Magician';
import MathCalc from '../MathCalc';
// начать тесты
test('Проверка на создание Magician', () => {
  const playMagician = new Magician('niki', 2);
  const result = {
    name: 'niki',
    distance: 2,
    _attack: 0,
    _stoned: false,
  };
  expect(playMagician).toEqual(result);
});

test('Проверка на создание Daemon', () => {
  const playDem = new Daemon('mik', 3);
  const result = {
    name: 'mik',
    distance: 3,
    _attack: 0,
    _stoned: false,
  };
  expect(playDem).toEqual(result);
});

//! /// /// /// /// /// /// /// /// /// /// /// ///
test('Проверка на значение атаки при stoned: true', () => {
  const playDem = new MathCalc('MIKI', 2);
  playDem.stoned = true;
  playDem.attack = 100;
  const result = 85;
  expect(playDem.attack).toEqual(result);
});

test('Проверка на get attack с значением stoned: false', () => {
  const playDem = new MathCalc('MOKI', 2);
  playDem.attack = 100;
  const result = 90;
  expect(playDem.attack).toEqual(result);
});

test('Проверка если атака больше 100', () => {
  const playDem = new MathCalc('giga', 20);
  playDem.attack = 1000;
  const result = 1000;
  expect(playDem.attack).toEqual(result);
});
