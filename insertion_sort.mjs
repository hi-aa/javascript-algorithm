// 삽입정렬
// 배열을 정렬된 영역과 정렬되지 않은 영역으로 구분해서
// 정렬되지 않은 영역에 있는 값을 가져와 정렬된 영역에서 값을 비교하고 삽입하는 형태로 사용한다.
// 이것도 마찬가지로 사용이 단순하나 성능은 좋지 못함

function InsertionSort(arr) {
  for(let i = 1; i < arr.length; i++) { // 첫번째(0번째 인덱스)는 이미 정렬된 것으로 가정
    // 정렬이 진행되면 앞부분은 정렬이 완료된 영역이 됨

    let insertingData = arr[i]; // 비교하려는 값
    let j;
    for(j = i - 1; j >= 0; j--) { // 정렬된 영역 값과 비교
      if(arr[j] > insertingData) {
        arr[j + 1] = arr[j]; // 비교하려는 값이 더 앞으로 가야한다면(insertingData가 아직도 더 작다면) 위치를 하나씩 뒤로 밀어냄
      } else {
        break; // 더이상 비교할 필요 없음
      }
    }
    arr[j + 1] = insertingData;
  }
}

let arr = [4, 1, 5, 3 , 6, 2];

console.log("정렬 전: ", arr);
InsertionSort(arr);
console.log("정렬 후: ", arr);