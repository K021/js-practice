function p(...args) {
  console.log(...args);
}

function countdown(seconds) {
  let timeoutIds = [];
  return new Promise(function(resolve, reject) {
    for (let i=seconds; i>=0; i--) {
      timeoutIds.push(
        setTimeout(function() {
          if(i===13) {
            timeoutIds.forEach(clearTimeout);
            return reject(new Error('number 13, it is not good.'));
          }
          if(i>0) p(i);
          else { p('GO!'); resolve('countdown resolve value'); }
        }, (seconds-i)*1000)
      );
    }
  });
}

countdown(3)
  .then(v => p(v))
  .catch(e => p(e.message));
