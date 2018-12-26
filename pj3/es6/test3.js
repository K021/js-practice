'use strict';

function p(...args) {
  console.log(...args);
}

function interval5() {
  const start = new Date();
  let i = 0;
  const intervalId = setInterval(function() {
    let now = new Date;
    if(now.getMinutes() !== start.getMinutes() || ++i > 10) {
      console.log(`\nstart: ${start}`);
      console.log(`now: ${now}`);
      console.log('interval closed');
      return clearInterval(intervalId);
    }
    console.log(`${i}: ${now}`);
  }, 5*1000);
}

interval5();

let l = [4, 1, 2, 3, 4, 5, 6, 7, 9];
let it = l.values();
for (let i of it) p(i);
