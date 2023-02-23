// 재귀함수 예시
// 하향식 계산을 이용한 하노이의 탑 구현

function hanoi(count, from, to, temp) {
  // 원반은 가장 위에 있는(가장 작은)것 부터 1~ 가장 아래에 있는 것(가장 큰)것을 count로 지칭
  if(count == 0) return;

  // 가장 아래에 있는 가장 큰 원반을 to로 옮기기 위해서
  // 가장 큰 원반 위에 있는 나머지 원반들을 temp로 이동시켜야 한다.
  hanoi(count - 1, from, temp, to);
  console.log(`원반${count}를 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);

}

// A기둥에 있는 3개의 원반을 C기둥으로 옮길 것, B기둥도 사용됨
hanoi(3, "A", "C", "B");