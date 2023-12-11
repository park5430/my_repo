// http 객체생성 require함수란 모듈을 읽어오는 함수 입니다
// http 모듈을 불러와서 http변수에 저장했습니다.
const http = require("http");
let count = 0; // 초기 count라는 변수를 0으로 설정
// createServer는 서버인스턴스를 만드는 함수이다.인수로 콜백 함수를 받는데
// 이 콜백함수는 요청과 응답 객체를 인수로 받는다.
const server = http.createServer((req, res) => {
  log(count); // 카운트 1증가 - 요청에 대한 로그(기록)을 간단히 남깁니다
  // 상태코드를 의미하는데 200이란 뜻은 정상작동을 의미함
  res.statusCode = 200;
  // 요청, 응답에 대한 부가정보이다. 컨텐츠 타입을 언급하고 뒤에
  // 컨텐츠의 종류를 기록하였다.
  // 지금 예시에서는 텍스트를 평문으로 해석하겠다는 의미
  // "text/html" 이라 한다면 텍스트를 html문서로 해석 하겠다는 의미
  res.setHeader("content-Type", "text/plain");
  res.write("hello___\n"); // 응답으로 hello\n 을 보여준다
  setTimeout(() => {
    res.end("Node.js!!!!!"); // 2초후에 Node.js 출력
  }, 2000);
});

function log(count) {
    console.log((count +=1));
}
// 3000번 포트를 사용하여 서버실행. 서버 실행되면 "hello Node.js"메세지 출력
server.listen(3000, () => console.log("hello Node.js")); 