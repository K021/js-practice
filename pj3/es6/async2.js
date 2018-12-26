'use strict';

function p(...args) {
  console.log(...args);
}

// let p1 = new Promise(function (resolve, reject) {
//   resolve('Success');
// });
//
// p1
//   .then(value => {
//     console.log(value);  // "Success!"
//     throw 'oh, no!';
//   })
//   .catch(e => {
//     console.log(e);  // "oh, no!"
//     return 'ok, I am fine.';
//   })
//   .then(value => {
//     console.log(value);  // ok, I am fine.
//     console.log('after a catch the chain is restored');
//   }, () => {
//     console.log('Not fired due to the catch');
//   });

Promise.resolve('success!').then(v => console.log(v));
Promise.reject(new Error('fail')).catch(e => console.log(e.message));
Promise.reject(new Error('fail')).catch(e => { throw e; });

let prom = new Promise(function (resolve, reject) {
  // 성공로직
  resolve('성공할 경우 넘겨줄 인자');
  // 실패 로직
  reject('실패할 경우 넘겨줄 값. 주로 에러 객체');
});

prom
  .then(value => console.log(value))  // 성공할 경우 처리
  .catch(error => console.log(error.message));  // 에러 날 경우 처리