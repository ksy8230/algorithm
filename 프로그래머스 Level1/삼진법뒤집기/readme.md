### 문제 ❔

https://programmers.co.kr/learn/courses/30/lessons/68935

> 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

| numbers | result |   
|---|---|
|45|7|
|125|229|

---
### 풀이 ✨
```javascript
function solution(n) {
    var answer = 0;
    const step1 = n.toString(3);
    const step2 = step1.split('').reverse().join('');
    answer = Number.parseInt(step2, 3);
    return answer;
}
```
- 10진법을 3진법으로 바꾸는 함수는 `.toString(진법수)`를 사용한다
- 숫자를 거꾸로 나열하려면 우선 '' 기준으로 스트링 형식으로 만들어 쪼갠 뒤 뒤집은 후 다시 붙여준다
- 3진법을 10진법으로 바꾸는 방법은 `parseInt(n, 3)`을 사용한다
---

### 다시 푼 날짜 ✔
| date | 회차 |   
|---|---|
|2021-03-03|1회|
|2021-xx-xx|x회|