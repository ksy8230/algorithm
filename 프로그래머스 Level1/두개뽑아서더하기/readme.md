### 문제 ❔

https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

> 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

| numbers | result |   
|---|---|
|[2,1,3,4,1]|[2,3,4,5,6,7]|
|[5,0,2,7]|[2,5,7,9,12]|

---
### 풀이 ✨
```javascript
function solution(numbers) {
    var answer = [];
    for( let i = 0; i < numbers.length; i++ ){
        for( let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j])
        }
    }
    const filter = new Set(answer);
    answer = [...filter].sort((a,b) => {
        return a - b
    });
    return answer;
}
```
- 뽑아내는 두 개의 정수의 인덱스가 서로 달라야 한다.   
이 부분에서 생각해내야할 것은 for문을 돌 때 두 번째로 뽑은 정수의 인덱스의 시작은 어디서부터인지 파악해야 한다.
- new Set(array) 를 이용하여 배열에서 중복되는 인자를 제거한다.
---

### 다시 푼 날짜 ✔
| date | 회차 |   
|---|---|
|2021-02-25|1회|
|2021-xx-xx|x회|