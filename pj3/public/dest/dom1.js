"use strict";

// function printDOM(node, prefix) {
//   console.log(prefix + node.nodeName);
//   for (let i = 0; i < node.childNodes.length; i++) {
//     printDOM(node.childNodes[i], prefix + '\t');
//   }
// }
//
// printDOM(document, '');
function highlightTagByContent(tag, content) {
  var es = document.getElementsByTagName(tag);
  console.log(es);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = es[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var e = _step.value;
      if (e.textContent.includes(content)) e.classList.add('highlight');
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function removeHighlights(tag, content) {
  var es = document.getElementsByTagName(tag);
  console.log(es);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = es[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var e = _step2.value;
      if (!content) e.classList.remove('highlight');else if (e.textContent.includes(content)) e.classList.remove('highlight');
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

var highlightActionElements = document.querySelectorAll('[data-action="highlight"]');
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  var _loop = function _loop() {
    var e = _step3.value;
    e.addEventListener('click', function (evt) {
      evt.preventDefault();
      highlightTagByContent('p', e.dataset.containing);
    });
  };

  for (var _iterator3 = highlightActionElements[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

var removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  var _loop2 = function _loop2() {
    var e = _step4.value;
    e.addEventListener('click', function (evt) {
      evt.preventDefault();
      removeHighlights('p', e.dataset.containing);
    });
  };

  for (var _iterator4 = removeHighlightActions[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    _loop2();
  }
} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
      _iterator4.return();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}