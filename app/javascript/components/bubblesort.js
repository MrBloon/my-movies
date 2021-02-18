// const bubbleSort = (arr) => {
//   while ( arr[0] > arr[1]) {
//     for (let i = 0; i < arr.length - 2; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//       } else { break; }
//       console.log(arr);
//     }
//   }
//   return arr;
// };

// bubbleSort([5,3,1,4,6]);





let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
            console.log(inputArr);
        }
    } while (swapped);
    return inputArr;
};






bubbleSort([5,3,1,4,6]);
