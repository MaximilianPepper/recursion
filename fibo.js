function fibs(n, arr = [0, 1]) {
  if (n <= 1) return [0];
  while (arr.length < n) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
}

function fibsRec(n, arr = [0, 1]) {
  if (n === 0) return [0];
  if (n === 1) return [0];
  if (arr.length >= n) return arr;
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibsRec(n, arr);
}
console.log(fibs(7));
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(12));
