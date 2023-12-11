const http = require("http");
const url = require("url"); //url 모듈의 로딩
http
.createServer((req, res) => {
    // url 모듈을 사용하여 
    // 요청으로 받은 url의 pathname을 얻어냅니다.
    // pathname이란 예를 들어, localhost:3000/user라면 
    // pathname은 /user 가 됩니다.
    // 그래서 아래코드는 pathname을 할당한다는 말입니다.
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    // /user로 요청이 온 경우
    if(path ==="/user"){
        // /user 이름으로 접근 시 아래 결과값을 보여 줍니다.
        res.end("[user] name : andy, age: 30")
    } else if (path ==="/feed") { // /feed로 요청이 온 경우
        res.end(`<ul>
        <li>picture1</li>
        <li>picture2</li>
        <li>picture3</li>
        </ul>`
        );
    } else {
        // 지정된 pathname이 아닌 경우 에러 표시
        res.statusCode = 404;
        // 페이지를 찾을 수 없다는 에러 표시
        res.end("404 page not found"); 
    }
})
// 대망의 포트설정
.listen("3000", () => console.log("라우터를 만들어 보자!"))
