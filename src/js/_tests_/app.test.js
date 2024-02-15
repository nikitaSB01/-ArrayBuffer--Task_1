// прописать import все файлы JS
import Daemon from '../Daemon';
import Magician from '../Magician';
import MathCalc from '../MathCalc';
// начать тесты
/* eslint-disable no-underscore-dangle */
test('Проверка на создание Magician', () => {
  const playMagician = new Magician('niki', 10, 20);
  const result = {
    distance: 20,
    _attack: 0,
    name: 'niki',
  };
  expect(playMagician).toEqual(result);
});
test('Проверка на создание Daemon', () => {
  const playDem = new Daemon('mik', 10, 20);
  const result = {
    distance: 20,
    _attack: 0,
    name: 'mik',
  };
  expect(playDem).toEqual(result);
});

test('Проверка на set _stoned', () => {
  const playDem = new MathCalc(100, 2);
  playDem.stoned = true;
  playDem.attack = 100;
  const result = 85;
  expect(playDem.attack).toEqual(result);
});

test('Проверка на get attack', () => {
  const playDem = new MathCalc(10, 20);
  const result = 0;
  expect(playDem.attack).toEqual(result);
});

test('Проверка если атака больше 100', () => {
  const playDem = new MathCalc(1000, 2);
  playDem.attack = 1000;
  const result = 100;
  expect(playDem.attack).toEqual(result);
});
