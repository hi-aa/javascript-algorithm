// 재귀호출 연습하기
// 3. 지수함수
function power(x, n) { // x의 n승을 구하기
  if(n == 0) return 1;
  return power(x, n - 1) * x;
}

console.log(power(2, 1)); // 2
console.log(power(2, 2)); // 4
console.log(power(2, 3)); // 8
console.log(power(2, 5)); // 32