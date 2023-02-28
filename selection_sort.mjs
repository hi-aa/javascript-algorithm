// 선택정렬
// 버블정렬과 비슷함
// 버블정렬이 앞에서부터 차례로 비교하며 큰 수를 찾아 뒤쪽부터 정렬했다면
// 선택정렬은 앞에서부터 차례로 비교하며 작은 수를 찾아 앞쪽부터 정렬함

// 이해하기 쉽고 단순하나 버블정렬과 마찬가지로 성능은 O(n^2)으로 좋지 않은 편

function SelectionSort(arr) {
  for(let i = 0; i < arr.length - 1 ; i++) { // 마지막 하나의 원소만 남으면 더이상 정렬할 필요가 없으므로 len - 1 까지만 비교함
    // 반복문이 진행되면 그 횟수만큼 앞부분은 정렬이 완료된 것이므로 i부터 arr.length까지가 정렬이
    // 완료되지 않은 영역임
    let minValueIndex = i;
    for(let j = i + 1; j < arr.length ; j++) {
      if(arr[j] < arr[minValueIndex]) { // 순회하며 가장 작은 값을 가진 인덱스 j를 설정함. 없으면 i가 그대로 유지됨.
        minValueIndex = j;
      }
    }

    // 가장 작은 값을 i위치로 이동시킴
    let temp = arr[i];
    arr[i] = arr[minValueIndex];
    arr[minValueIndex] = temp; // 교체
  }
}

let arr = [4, 2, 1, 3];

console.log("정렬 전: ", arr);
SelectionSort(arr);
console.log("정렬 후: ", arr);