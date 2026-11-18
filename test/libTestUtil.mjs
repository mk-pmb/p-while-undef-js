// -*- coding: utf-8, tab-width: 2 -*-

import pDelay from 'delay';


const EX = {

  makeFauxGenerator(values) {
    let idx = -1;
    return async function getNext() {
      await pDelay(10);
      idx += 1;
      if (idx < values.length) { return values[idx]; }
      throw new Error('No more values!');
    };
  },


};


export default EX;
