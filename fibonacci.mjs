// 피보나치 수열
// 1, 1로 시작해서 바로 앞의 두 수를 무한히 더한다.

function fibonacci1(n) {
  if(n == 0 || n == 1) return n;
  return fibonacci1(n - 2) + fibonacci1(n - 1);
}
// 재귀함수는 함수를 계속 호출하며 콜스택 영역을 차지함
// 동일한 계산을 매번 반복함(중복된 계산)

// 메모이제이션: 계산 결과를 저장해두고, 동일한 계산이 필요하다면 저장된 값을 가져와 사용한다.
// memo: 계산결과 기억을 위한 매개변수 (HashMap으로 한다)
function fibonacci2(n, memo) {
  if(n == 0 || n == 1) return n;

  if(memo[n] == null) { // 저장된 값이 없음
    memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo); // 계산 후 저장
  }
  return memo[n]; // 저장된 계산 결과를 리턴함
}

// 메모이제이션은 재귀를 이용해(하향식) 문제를 해결, 속도를 위해 메모리를 사용하는 케이스
// 타뷸레이션 (상향식) 계산에 필요한 모든 값을 전부 계산 후 테이블에 저장해둠
function fibonacci3(n) {
  if(n <= 1) return 1;

  let table = [0, 1];

  // 상향식
  for(let i = 2; i <= n; i++) {
    table[i] = table[i - 2] + table[i - 1]; // 반복문을 진행하면 table이 차례로 채워지게 되는 듯?
  }
  return table[n];
}
// 메모이제이션이 더 좋은지 타뷸레이션이 좋은지는 상황에 따라 다름
// 메모이제이션이 재귀를 이용한 하향식 접근으로 직관적인 편, 메모리를 사용하여 성능을 향상함
// 재귀가 직관적이면 메모이제이션을 추천
// 재귀를 사용하는게 직관적이지 않다면 상향식인 타뷸레이션을 이용할 수 있음

let start1 = new Date();
console.log(fibonacci1(20)); // 1 + 1 + 2 + 3 + 5 + 8 => 5번째 피보나치 수는 8
let end1 = new Date();
console.log(`피보나치 1 실행시간: ${end1 - start1}ms`);

let start2 = new Date();
console.log(fibonacci2(20, {}));
let end2 = new Date();
console.log(`피보나치 2 실행시간: ${end2 - start2}ms`);

let start3 = new Date();
console.log(fibonacci3(20));
let end3 = new Date();
console.log(`피보나치 3 실행시간: ${end3 - start3}ms`);