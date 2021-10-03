const arr = new Array(10);
arr.fill(1);

const arr2 = [1, 2, 3, 4, 5];
arr2.fill(23, 2, 6);
arr2;

//Array.from
const arr3 = Array.from({ length: 7 }, () => 1);
console.log(arr3);

const z = Array.from({ length: 7 }, (_, i) => 1 + i);
z;
