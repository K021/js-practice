
// function printDOM(node, prefix) {
//   console.log(prefix + node.nodeName);
//   for (let i = 0; i < node.childNodes.length; i++) {
//     printDOM(node.childNodes[i], prefix + '\t');
//   }
// }
//
// printDOM(document, '');

function highlightTagByContent(tag, content) {
  const es = document.getElementsByTagName(tag);
  console.log(es);
  for (let e of es) {
    if (e.textContent.includes(content)) e.classList.add('highlight');
  }
}

function removeHighlights(tag, content) {
  const es = document.getElementsByTagName(tag);
  console.log(es);
  for (let e of es) {
    if (!content) e.classList.remove('highlight');
    else if (e.textContent.includes(content)) e.classList.remove('highlight');
  }
}

const highlightActionElements = document.querySelectorAll('[data-action="highlight"]');
for (let e of highlightActionElements) {
  e.addEventListener('click', evt => {
    evt.preventDefault();
    highlightTagByContent('p', e.dataset.containing);
  });
}

const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for (let e of removeHighlightActions) {
  e.addEventListener('click', evt => {
    evt.preventDefault();
    removeHighlights('p', e.dataset.containing);
  });
}

function refreshServerInfo() {
  const $serverInfo = $('.serverInfo');
  $.get('http://localhost:7070')
    .then(
      function (data) {
        Object.keys(data).forEach(key => $(`[data-replace=${key}]`).text(data[key]));
      })
    .catch(
      function (jqXHR, textStatus, err) {
        console.error(err);
        $serverInfo.addClass('error').html('Error connecting to server.');
      });
}
setInterval(refreshServerInfo, 200);

// function refreshServerInfo() {
//   const req = new XMLHttpRequest();
//   req.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText);
//     const serverInfo = document.querySelector('.serverInfo');
//
//     Object.keys(data).forEach(key => {
//       const replacements = serverInfo.querySelectorAll(`[data-replace="${key}"]`);
//       for (let r of replacements) {
//         r.textContent = data[key];
//       }
//     });
//   });
//   req.open('GET', 'http://localhost:7070', true);
//   req.send();
// }
//
// setInterval(refreshServerInfo, 200);

// function refreshServerInfo() {
//   const req = new XMLHttpRequest();
//   req.addEventListener('load', function () {
//     console.log(this.responseText);
//   });
//   req.open('GET', 'http://localhost:7070', true);
//   req.send();
// }
// refreshServerInfo();

