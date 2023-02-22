// 재귀호출 연습하기
// 2. 문자열의 길이 구하기
function strLength(arr) { // 문자열을 array처럼 쓰네..
  if(arr[0] == null) return 0;
  return strLength(arr.slice(0, -1)) + 1;
}

let str = "abcde";
let len = strLength(str);
console.log(len); // 5