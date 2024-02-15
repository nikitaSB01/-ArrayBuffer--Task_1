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
//! // // //
test('Проверка на set _stoned', () => {
  const playDem = new MathCalc(100, 2);
  playDem._attack = 100;
  playDem.stoned = true;
  /*  const result = {
    distance: 20,
    _attack: 0,
    _stoned: true,
  }; */
  expect(playDem.attack).toEqual(85);
});

test('Проверка на get attack', () => {
  const playDem = new MathCalc(10, 20);
  const result = 0;
  expect(playDem.attack).toEqual(result);
});
