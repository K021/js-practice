'use strict';

const EventEmitter = require('events').EventEmitter;

function p(...args) {
  console.log(...args);
}

// countdown Promise function
function countdown(seconds) {
  let timeoutIds = [];  // timeoutId 저장 배열
  // promise 인스턴스 생성
  return new Promise(function(resolve, reject) {
    for (let i=seconds; i>=0; i--) {  // 입력된 시간 동안 초단위로 순회
      // setTimeout 설정 하면서 id 값 저장
      timeoutIds.push(setTimeout(function() {
        if(i===13) {
          timeoutIds.forEach(clearTimeout); // 남아있는 timeoutIds 모두 clear
          // promise 종료 (rejected)
          return reject(new Error('number 13, it is not good.'));
        }
        if(i>0) p(i);  // i 가 0 이 아닐 때는 i 프린트
        else { p('GO!'); resolve('countdown resolve value'); } // i 가 0 일 때는 'GO!' 프린트
      }, (seconds-i)*1000));  // seconds 부터 1초 간격으로 내림차순 생성
    }
  });
}

// countdown 후 launch promise function
function launch() {
  return new Promise(function(resolve, reject) {
    p('Lift off!');  // countdown 종료 후 출발 메세지
    setTimeout(() => resolve('In orbit!'), 5*1000);  // 5 초 후 궤도 도착 메세지 출력
  });
}

// launch promise 에 시간제한을 거는 promise function
function addTimeout(f, time) {
  time = time || 1000;  // time 기본값 1 초
  return function() {
    return new Promise(function(resolve, reject) {
      const tid = setTimeout(reject, time, new Error('promise time-out'));
      f()
        .then(function(...args) {
          clearTimeout(tid);
          resolve(...args);
        })
        .catch(function(...args) {
          clearTimeout(tid);
          reject(...args);
        });
    });
  };
}

class Countdown extends EventEmitter {
  constructor(seconds) {
    super();
    this.seconds = seconds;
  }
  go() {
    const countdown = this;
    return new Promise(function(resolve, reject) {
      for (let i=countdown.seconds; i>=0; i--) {
        setTimeout(function() {
          if (i===13) return reject(new Error('number 13, it is not good.'));
          countdown.emit('tick', i);
          if (i===0) resolve();
        }, (countdown.seconds-i)*1000);
      }
    });
  }
}

const c = new Countdown(3);

c.on('tick', i => {if(i>0) p(`this is i: ${i}`);});

c.go()
  .then(
    () => p('countdown completed'),
    (err) => p('error: ' + err.message)
  )
  .then(addTimeout(launch, 4*1000))
  .then((msg) => p(msg))
  .catch(err => p('error in launch: ' + err.message));

// countdown(3)
//   .then(addTimeout(launch, 6*1000))
//   .then((msg) => p(msg))
//   .catch(err => p('error in launch: ' + err.message));
