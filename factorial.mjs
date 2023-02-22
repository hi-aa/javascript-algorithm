function factorial(number) {
  if(number == 1 || number == 0)  {
    return 1;
  } else {
    return number * factorial(number-1);
  }
}
console.log(factorial(5)); // 120
// 5! = 5 * 4!
// 4! = 4 * 3!
// => 하위 문제의 결과를 기반으로 상위 문제를 해결