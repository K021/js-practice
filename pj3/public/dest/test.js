'use strict'; // es6 기증: 블록 스코프 변수 선언

var sentences = [{
  subject: 'JavaScript',
  verb: 'is',
  object: 'great'
}, {
  subject: 'Eagles',
  verb: 'are',
  object: 'awesome'
}]; // es6 기능: 객체 분해

function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;
  // es6 기능: 템플릿 문자열
  console.log("".concat(subject, " ").concat(verb, " ").concat(object));
} // es6 기능: 반복문


for (var _i = 0; _i < sentences.length; _i++) {
  var s = sentences[_i];
  say(s);
}