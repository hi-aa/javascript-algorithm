// 재귀호출 연습하기
// 1. 배열의 합
function sumArray(arr) {
  if(arr.length == 1) {
    return arr[0];
  // if(arr.length == 0) {
  //   return 0;
  } else {
    // slice(0부터, 마지막 인덱스를 제외한 것 까지 자르기) 
    return sumArray(arr.slice(0, -1)) + arr[arr.length - 1]
  }
}

console.log(sumArray([1,2,3,4,5])) // 15