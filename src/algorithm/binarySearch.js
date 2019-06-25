function searchBinary(array, item) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let guess = array[middle];

    if (guess === item) {
      return middle;
    }
    if (guess < item) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
}

console.log(searchBinary([1, 2, 3, 4, 5, 6, 7, 8, 9, 45], 8));
