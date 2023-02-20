import { HashSet } from './HashSet.mjs';

let hashset = new HashSet();
console.log(`isEmpty: ${hashset.isEmpty()}`);

console.log("===데이터 삽입===");
hashset.add(1);
hashset.add(1);
hashset.add(20);
hashset.add(500);
hashset.printAll();
console.log(`isEmpty: ${hashset.isEmpty()}`);
console.log(`isContain 1: ${hashset.isContain(1)}`);

console.log("===데이터 1 제거===");
hashset.remove(1);
hashset.printAll();
console.log(`isContain 1: ${hashset.isContain(1)}`);

console.log("===데이터 clear===");
hashset.clear();
hashset.printAll();
console.log(`isEmpty: ${hashset.isEmpty()}`);
