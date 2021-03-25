### 문제 ❔

https://programmers.co.kr/learn/courses/30/lessons/17681



---
### 풀이 1 
```javascript
function solution(n, arr1, arr2) {
  var answer = [];
  let array1 = [];
  let array2 = [];
  // 각 배열을 이진수로 변환
  arr1.forEach(element => {
    let target = element.toString(2);
    // target length가 n보다 작으면 n자리 될 때까지 앞에 0 붙이기
    if(target.length < n) {
      for(let i = target.length; target.length < n; i++) {
        target = '0'.concat(target)
      }
    }
    array1.push(target);
  });
  arr2.forEach(element => {
    let target = element.toString(2);
    // target length가 n보다 작으면 n자리 될 때까지 앞에 0 붙이기
    if(target.length < n) {
      for(let i = target.length; target.length < n; i++) {
        target = '0'.concat(target)
      }
    }
    array2.push(target);
  });
 

  // 두 배열의 각 아이템 합의 배열 구하기
  let sumArray = [];
  for(let i = 0; i < n; i++) {
    let array1letter = '';
    let array2letter = '';
    
    sumArray.push(String(Number(array1[i]) + Number(array2[i])))
  }
  
  // 모든 배열의 2 -> 1 변경
  for(let i = 0; i < sumArray.length; i ++) {
    sumArray[i] = sumArray[i].replace(/2/gi, 1)
  }
  
  for(let i = 0; i < sumArray.length; i ++) {
    sumArray[i] = sumArray[i].replace(/1/gi, '#')
    sumArray[i] = sumArray[i].replace(/0/gi, ' ')
  }


  return answer = sumArray;
}
```


### 풀이 2 ✨
```javascript

function solution(n, arr1, arr2) {
  var answer = [];
  for(let i = 0; i<n; i++){
    // 비트 논리 연산자 첫번째, 두번째 비트끼리 쌍으로 이진법 적용 0|1 -> 1
    c = (arr1[i]|arr2[i]).toString(2).replace(/1/g,"#").replace(/0/g," ");
    // n 자리수만큼 앞에 공백 넣기
    while(c.length != n) {
      c = " " + c;
    }
    answer.push(c);
  }

  return answer;
}
```

---

### 다시 푼 날짜 ✔
| date | 회차 |   
|---|---|
|2021-03-25|1회|
|2021-xx-xx|x회|