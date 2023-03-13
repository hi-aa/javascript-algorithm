// 이진탐색
// up & down 게임을 생각하기
// target 값을 찾기 위해 정렬된 배열에서 범위를 반으로 줄여가면서 값의 위치를 찾음
// 재귀호출 방식으로 구현

// target: 찾는 값
// start: 배열의 시작 인덱스
// end: 배열의 끝 인덱스
function binarySearch(arr, target, start, end) {
  if(start > end) {
    return null;
  }

  let mid = Math.floor((start + end) / 2);
  
  if(arr[mid] == target) {
    return mid;
  } else if(target > arr[mid]) { // 더 큰 값을 찾아야 함
    return binarySearch(arr, target, mid + 1, end);
  } else { // 더 작은 값을 찾아야 함
    return binarySearch(arr, target, start, mid - 1);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = binarySearch(arr, 3, 0, arr.length - 1);
console.log(`index: ${index}`);