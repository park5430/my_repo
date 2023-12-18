// urlMap 함수 연습해보기
// 코드 리팩토링 심화과정

const http = require("http");
const url = require("url");
http
  .createServer((req, res) => {
    // url 기능을 써서 세부주소를 활용할 수 있게 path변수선언
    const path = url.parse(req.url, true).pathname;
    // 위랑 같은데 다국어 지원 옵션을 추가함
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    // 아래 if를 살짝 고쳐서 urlMap 함수를 이용하도록 코드를 수정해 주세요.
    if (path in urlMap) {
        urlMap[path](req,res); 
    } else {
        notFound(req,res);
    }

  })
  .listen("3000", () => console.log("라우터를 만들어보자!"));

  const user = (req, res) => {
    res.end("[user] name : andy, age: 30");
} 

const user1 = (req, res) => {
    res.end("[user] name : allison, age: 30");
} 

const user2 = (req, res) => {
    res.end("[user] name : dan, age: 30");
} 

const user3 = (req, res) => {
    res.end("[user] name : tom, age: 30");
} 

const user4 = (req, res) => {
    res.end("[user] name : sang, age: 40");
} 

const feed = (req,res) => {
    res.end(`<meta charset="UTF-8"><ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture3</li>
  </ul>
  `);
}
const notFound = (req,res) => {
    res.statusCode = 404;
    res.end("404 page not found");
}

const urlMap = {
    '/': (req,res) => res.end('home'),
    '/user': user,
    '/user1': user1,
    '/user2': user2,
    '/user3': user3,
    '/user4': user4,
    '/feed': feed,
}


hohohoisting();
// 일반함수로 쓰면 호이스팅이 걸린다.
function hohohoisting() {console.log("호이스팅이네 ㅋ");}
// 함수표현식으로 다시 쓰면 호이스팅을 막을 수 있다.
const hohohoisting = () => console.log("호이스팅 막음 ㅋ");
