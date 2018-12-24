'use strict';

const o = {
  name: 'this is o',
  f: function() {
    console.log(this);
    const inner = function() {
      console.log(this);
    };
    inner();
  },
};
o.f();
