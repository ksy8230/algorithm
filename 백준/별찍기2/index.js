//파일을 읽어오기 위해 Node.js의 built-in file system module인 fs를 썼다.
var fs = require("fs");

// 읽어온 내용은 array로 저장이 된다.
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// input에서 지정한 벨류를 읽어와서 별개의 변수로 선언하고 활용한다.
let num = Number(input[0]);

// 구현부
let answer = "";
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num - i - 1; j++) {
    answer += " ";
  }
  for (let k = 0; k <= i; k++) {
    answer += "*";
  }
  answer += "\n";
}
console.log(answer);
