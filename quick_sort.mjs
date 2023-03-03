// 퀵정렬
// 피벗을 정하고, 왼쪽에서 오른쪽 방향으로 값을 비교하며 피벗보다 큰 값을 찾음(1)
// 오른쪽에서 왼쪽으로 진행하며 값을 비교해서 피벗보다 작은 값을 찾음(2)
// (1)과 (2)의 위치를 교환하면서 왼쪽에는 피벗보다 작은 값들이 놓이고 오른쪽에는 피벗보다 큰 값들이 놓이게 됨
// 왼쪽에서 시작한 인덱스와 오른쪽에서 시작한 인덱스가 서로 넘어가면 해당 위치와 피벗을 교환
// 그러면 피벗은 정렬이 완료된 것

// 퀵 정렬의 성능은 피벗을 얼마나 잘 잡느냐에 따라 달라짐
// 피벗을 적절하게 선택해서 배열의 절반정도만 비교하고 해당 단계를 끝낼 수 있으면(?) 나쁘지 않은 성능이지만 θ(nlogn)
// 한쪽으로 쏠려있는 경우 O(n^2) 성능이 나빠짐 //// n^2이면 n번을 도는걸 n회 씩 반복해야? 하는건가?
// => 하지만 대부분의 경우 피벗을 설정할 때 중간값을 선택하므로 θ(nlogn) // 세타......

// 퀵정렬(θ(nlogn))과 병합정렬(O(nlogn))은 복잡도로 보자면 병합정렬이 더 좋지만
// 더 적은 비교와 더 적은 메모리 공간을 차지하는 퀵정렬을 더 좋은 알고리즘으로 평가한다.

// arr: 정렬하고자 하는 배열
// left: 배열의 시작 인덱스 = 0
// right: 배열의 마지막 인덱스 = arr.length
function quickSort(arr, left, right) {
  if(left <= right) {
    // 피벗을 기준으로 좌우는 얼추 정리가 된 상태
    // 이후 피벗을 정렬 위치로 옮긴 것임
    // divide 함수에서 피벗을 정렬시키고 피벗의 위치를 리턴받도록 함
    let pivot = divide(arr, left, right);
    quickSort(arr, left, pivot - 1); // 피벗의 왼쪽 부분 배열을 정렬함
    quickSort(arr, pivot + 1, right); // 피벗의 오른쪽 부분 배열을 정렬함
  }
}

function divide(arr, left, right) {
  let pivot = arr[left]; // 피벗은 단순히 가장 왼쪽에 있는 값을 선택함

  let leftStartIndex = left + 1; // 피벗 다음 인덱스 // 피벗보다 큰 값 찾기
  let rightStartIndex = right; // 배열의 마지막 인덱스 // 피벗보다 작은 값 찾기

  while(leftStartIndex <= rightStartIndex) { // 서로 지나치면 피벗 위치 정하기 끝
    while(leftStartIndex <= right && pivot >= arr[leftStartIndex]) {
      leftStartIndex++; // leftStartIndex 위치의 값을 비교. 피봇보다 작은 값이면 다음 인덱스로 넘어감(오른쪽으로..)
    }

    while(rightStartIndex >= (left + 1) && pivot <= arr[rightStartIndex]) {
      rightStartIndex--; // 피봇보다 작은 값이 위치한 인덱스를 찾기(왼쪽으로 --)
    }

    if(leftStartIndex <= rightStartIndex) { // 선택된 인덱스 두개가 서로 지나치지 않은 경우
      // 두 위치의 값을 교환
      swap(arr, leftStartIndex, rightStartIndex);
    }
  }

  // pivot(인덱스: left)와 (leftStart와 rightStart가 서로 지나친 상태에서의) rightStart를 교환
  swap(arr, left, rightStartIndex);
  return rightStartIndex; // 교체된 피봇의 위치
}

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

// 테스트
let arr = [3, 5, 7, 8, 9, 1, 6, 2];
console.log("정렬 전: " + arr);
quickSort(arr, 0, arr.length - 1);
console.log("정렬 후: " + arr);
