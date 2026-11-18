// -*- coding: utf-8, tab-width: 2 -*-
'use strict';

const EX = async function pWhileUndef(func, ...args) {
  let result;
  while (result === undefined) {
    // eslint-disable-next-line no-await-in-loop
    result = await func(...args);
    /* The `no-await-in-loop` rule is meant to remind about doing work in
      parallel where possible. Until JS gets proper tail call optimization,
      await in while is our best way to avoid infinite stack growth. */
  }
  return result;
};


module.exports = EX;
