### 문제 ❔

https://programmers.co.kr/learn/courses/30/lessons/12921

> 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)


| no | n | result |
|---|---|---|
|예1|10|4|
|예1|5|3|


---
### 풀이 1 
```javascript
function solution(n) {
    let answer = [];

    for(let i = 1; i <= n; i ++) {
        let primeNumber = true;
        for (let j = 2; j < i; j ++) {
            if (i % j === 0) {
                primeNumber = false
            }
        }
        if(primeNumber) {
            answer.push(i)
        }
    }

    return answer.length - 1;
}
```


### 풀이 2 ✨
```javascript
// console.log(2 ** 3) // 2의 3승 = 8

function solution(n) {
  const s = new Set();
  // 3 이상인 경우 홀수만 set에 넣기
  for (let i = 3; i <= n; i += 2) {
    s.add(i);
  }
  // set에 2 포함
  s.add(2);
  // 3의 배수들부터 n보다 작은 배수들 loop
  for (let j = 3; j ** 2 < n; j++) {
    // 홀수만 탐색
    if (s.has(j)) {
        // set 안에 배수의 숫자가 해당하면 제거 (= 나 아닌 다른 애들도 나누어 떨어지는 숫자들 제거) 
      for (let k = j ** 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }

  return s.size;
}
```

---

### 다시 푼 날짜 ✔
| date | 회차 |   
|---|---|
|2021-03-18|1회|
|2021-xx-xx|x회|