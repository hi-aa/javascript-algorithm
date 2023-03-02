// 병합정렬
// 배열을 아주 작게 쪼개고, 작은 배열을 다시 합쳐가면서(merge) 정렬된 배열을 만든다.
// 이해와 구현은 어렵지만 성능은 O(nlogn) 성능이 이전보다 훨씬 좋음

// leftIndex: 배열의 시작 인덱스
// rightIndex: 배열의 마지막 인덱스
function MergeSort(arr, leftIndex, rightIndex) {
  if(leftIndex < rightIndex) { // 배열의 크기가 2이상
    // 배열의 중간값을 찾음
    let midIndex = parseInt((leftIndex + rightIndex) / 2);

    // 재귀호출을 이용해 쪼개진 배열 두개를 정렬함
    MergeSort(arr, leftIndex, midIndex);
    MergeSort(arr, midIndex + 1, rightIndex);
    // 반씩 쪼개져서 정렬된 함수를 병합하면서 정렬함
    Merge(arr, leftIndex, midIndex, rightIndex);
  }
}

function Merge(arr, leftIndex, midIndex, rightIndex) { // MergeSort가 재귀호출을 하면서 Merge를 실행하기 때문에 arr.length.. 로 접근하면 안됨.. 파라메터로 사용할 것..
  let leftAreaIndex = leftIndex; // 왼쪽 배열의 정렬위치
  let rightAreaIndex = midIndex + 1; // 오른쪽 배열의 정렬위치

  let tempArr = [];
  tempArr.length = rightIndex + 1;
  tempArr.fill(0, 0, rightIndex + 1); // 0으로 모든 배열을 채움

  let tempArrayIndex = leftIndex; // 병합중인 배열의 인덱스
  while(leftAreaIndex <= midIndex && rightAreaIndex <= rightIndex) { // 두 배열 중 하나가 정렬이 완료될 때 까지 반복함
    // 왼쪽 배열 데이터와 오른쪽 배열 데이터를 비교하고
    // 비교가 완료되면 tempArr에 담기
    // 정렬된 쪽의 인덱스 ++
    if(arr[leftAreaIndex] <= arr[rightAreaIndex]) {
      // tempArr[tempArrayIndex] = arr[leftAreaIndex];
      // leftAreaIndex++;
      tempArr[tempArrayIndex] = arr[leftAreaIndex++]; // 오.. 후위증감..
    } else {
      // tempArr[tempArrayIndex] = arr[rightAreaIndex];
      // rightAreaIndex++;
      tempArr[tempArrayIndex] = arr[rightAreaIndex++];
    }
    tempArrayIndex++;
  }
  // while 종료 시 둘중 하나의 배열은 정렬이 완료됨

  // 나머지 배열은 마저 순서대로 넣어주기
  if(leftAreaIndex > midIndex) { // 오른쪽 배열의 정렬 필요
    for(let i = rightAreaIndex; i < rightIndex + 1; i++) {
      tempArr[tempArrayIndex++] = arr[i]; // 후위증감: 할당이 먼저 이루어지고, 이후 값이 증가함
    }
    
  } else { // 왼쪽 배열의 정렬 필요
    for(let i = leftAreaIndex; i < midIndex + 1; i++) {
      tempArr[tempArrayIndex++] = arr[i]; 
    }
  }
  // 정렬 완료

  // tempArr를 arr로 덮어쓰기
  for(let i = leftIndex; i <= rightIndex; i++) {
    arr[i] = tempArr[i];
  }
}

let arr = [3,2,5,7,1,8,4,6];
console.log("정렬 전: ", arr);
MergeSort(arr, 0, arr.length - 1);
console.log("정렬 후: ", arr);