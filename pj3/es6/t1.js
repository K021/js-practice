'use strict';

function print(...args) {
  console.log(...args);
}

// x = 13;
// print(x);

if (typeof xxx === 'undefined') {
  print('xxx is not declared');
} else {
  print('xxx is declared');
}
let xxx = 5;

let arr = [];
for(let i = 0; i < 5; i++){
  arr.push(() => i);
}
for(let id in arr) {
  console.log(arr[id]());
}

var l = [];
for(var i = 0; i < 5; i++){
  l.push((idx => () => idx)(i));
}
// for(var i = 0; i < 5; i++){
//   l.push(function(id) {
//     return () => id;
//   }(i));
// }
for(var index in l) {
  console.log(l[index]());
}
print(`this is i: ${i}`);
print(`this is index: ${index}`);

let globalFunc;
{
  var blockVar = 'block variance';
  globalFunc = () => console.log(blockVar);
}
globalFunc();
blockVar = 'block var changed';
globalFunc();


function secret() {
  const secretInfo = 'secret information';
  return function() {
    // do sth with secretInfo
    console.log(`length of secret information: ${secretInfo.length}`);
  };
}
const f = secret();
f();  // length of secret information: 18

function test() {
  let sharedInfo = 'shared information';
  let l = [];
  l[0] = () => print(sharedInfo + ' function #1');
  l[1] = () => print(sharedInfo + ' function #2');
  l[2] = string => {
    sharedInfo = string;
    print(sharedInfo);
  };
  return l;
}

const fs = test();
fs[0]();
fs[1]();
fs[2]('information has been changed');
fs[0]();
fs[1]();
