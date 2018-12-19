$(document).ready(function() {  // js 코드를 실행하기 전, 브라우저가 html 을 다 불러왔는지 확인
  'use strict';  // 엄격하게 js 코드 실행
  paper.install(window);  // Paper.js 를 전역 설치
  paper.setup(document.getElementById('mainCanvas'));  // Paper.js 에 canvas element 연결

  // 캔버스에 원 그리기 반복문
  // var c;
  // for(var x=25; x<400; x+=50) {
  //   for(var y=25; y<400; y+=50) {
  //     c = Shape.Circle(x, y, 20);
  //     c.fillColor = 'green';
  //   }
  // }

  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';

  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontsize = 20;
  text.content = 'Hello World';


  var tool = new Tool();  // tool 객체 생성
  // tool 객체에 이벤트 핸들러를 연결
  // onMouseDown 은 마우스가 클릭될 때마다 이 핸들러에 연결된 함수가 호출된다.
  tool.onMouseDown = function(event) {  // 이밴트 핸들러에 함수 연결
    // event.point 는 마우스 클릭 좌표 정보를 담고 있다.
    // Shape.Circle(event.point, 20) 으로 대체할 수 있다. 자바스크립트는 넘겨받은 매개변수를 바탕으로 추론하는 능력이 있다.
    var c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'green';
  }

  paper.view.draw();  // Paper.js 가 화면에 그림을 그림
})
