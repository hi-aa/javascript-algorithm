// 버블정렬
// 앞에서부터 2개씩 순차적으로 비교하며 큰 값을 뒤로 보낸다. (오름차순)
// 단순하나 성능은 그렇게 좋지 못함 // O(n^2)
function bubbleSort(arr) {
  for(let i = 0; i < arr.length - 1; i ++) { // 두개씩 비교하므로 len-1회 비교
    // j는 실제 arr 참조할 때 쓸 인덱스
    // i가 증가했다면 배열 뒤쪽 요소들은 정렬이 완료된 것으로 해당 인덱스는 비교에서 제외함
    for(let j = 0; j < (arr.length - 1 - i); j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }  
}

let arr = [4, 2, 3, 1];
console.log("정렬 전: ", arr);

bubbleSort(arr);
console.log("정렬 후: ", arr);