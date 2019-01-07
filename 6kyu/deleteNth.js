// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering.
// For example if N = 2, and the input is[1, 2, 3, 1, 2, 1, 2, 3], you take[1, 2, 3, 1, 2], 
// drop the next[1, 2] since this would lead to 1 and 2 being in the result 3 times, 
// and then take 3, which leads to[1, 2, 3, 1, 2, 3].


function deleteNth(arr, n) {
  let filteredArr = [];
  let countInArray = function (array, num) {
    return array.filter(item => item === num).length;
  }

  for (let i in arr) {
    if (countInArray(filteredArr, arr[i]) < n) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
}

deleteNth([37, 29, 29, 37, 29, 29, 29, 44, 38, 29, 44, 37, 37, 29, 29, 37, 44, 37, 29, 37, 37, 37, 29, 44, 38, 37], 9)