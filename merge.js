function merge(left, right) {
  let arr = [];
  let l = 0;
  let r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      arr.push(left[l]);
      l++;
    } else {
      arr.push(right[r]);
      r++;
    }
  }
  return arr.concat(left.slice(l)).concat(right.slice(r));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([4, 3, 2, 7, 1, 10, 9]));
