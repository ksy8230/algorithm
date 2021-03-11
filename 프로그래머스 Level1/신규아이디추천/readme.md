### 문제 ❔

https://programmers.co.kr/learn/courses/30/lessons/72410

> 카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다. "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다.
다음은 카카오 아이디의 규칙입니다.


1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.   
2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.   
3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.   
4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.   
5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.   
6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.   
     만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.   
7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.   

| no | new_id | result |
|---|---|---|
|예1|"...!@BaT#*..y.abcdefghijklm"|"bat.y.abcdefghi"|
|예1|"z-+.^."|"z--"|


---
### 풀이 ✨
```javascript
function solution(new_id) {
        let answer = new_id;
        function convertLowercase(a) {
            return a.toLowerCase();
        }
        function removeLetter(a) {
            const test = a.split('').filter(v => {
                if (/[a-z]/.test(v) || !(isNaN(v)) || v === '-' || v === '_' || v === '.') {
                    return a
                }
            });
            return test.join('');
        }
        function doubledot(a) {
            if (/\.{2,}/g.test(a)) {
                return a.replace(/\.{2,}/g, '.');
            }
            return a;
        }
        function removedotstartend(a) {
            if (/^\./.test(a)|/\.$/.test(a)) {
                return a.replace(/^\./, '').replace(/\.$/, '');
            }
            return a;
        }
        function empty(a) {
            if(a.length === 0) {
                return a = 'a';
            }
            return a;
        }
        function minLength(a) {
            if (a.length >= 16) {
                a = a.substring(0, 15);
                if (/\.$/.test(a)) {
                    return a.replace(/\.$/, '');
                }
                return a;
            }
            return a;
        }
        function repeat(a) {
            if(a.length <= 2) {
                const lastLetter = a.split('').pop();
                let newLetter = a;
                for(let i = newLetter.length; i < 3; i++) {
                    newLetter = newLetter.concat(lastLetter);
                }
                return newLetter;
            }
            return a;
        }
        answer = convertLowercase(new_id);
        answer = removeLetter(answer);
        answer = doubledot(answer);
        answer = removedotstartend(answer);
        answer = empty(answer);
        answer = minLength(answer);
        answer = repeat(answer);
        
        return answer;
    }
```

---

### 다시 푼 날짜 ✔
| date | 회차 |   
|---|---|
|2021-03-12|1회|
|2021-xx-xx|x회|