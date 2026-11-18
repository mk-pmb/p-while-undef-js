// -*- coding: utf-8, tab-width: 2 -*-

import test from 'p-tape';

import pWhileUndef from '../index.js';

import tu from './libTestUtil.mjs';


test('readSensor', async (t) => {
  t.plan(4);
  const readSensor = tu.makeFauxGenerator([
    undefined,
    undefined,
    101,
    undefined,
    102,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    103,
    undefined,
    undefined,
    undefined,
    104,
  ]);
  t.strictEqual(await pWhileUndef(readSensor), 101);
  t.strictEqual(await pWhileUndef(readSensor), 102);
  t.strictEqual(await pWhileUndef(readSensor), 103);
  t.strictEqual(await pWhileUndef(readSensor), 104);
});
