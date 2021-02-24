// const longestPalindrome = (s) => {
//   let longest = '';
//   for(let i = 0; i < s.length; i++) {
//     let temp = expand(s, i, i)
//     // console.log(temp);
//     if(temp.length > longest.length) {
//       longest = temp
//     }
//     temp = expand(s, i, i + 1)
//     if(temp.length > longest.length) {
//       longest = temp
//     }
//   }
//   return longest
// }

// const findMaxDifference = (A, N) => {
//   let maxDifference = 0;
//   // console.log(maxDifference);
//   for (let i = 1; i <= N - 1; i++) {
//     firstPart = A.slice(0, i);
//     secondPart = A.slice(i)
//     // console.log(firstPart);
//     // console.log(secondPart);

//     maxFirst = Math.max(...firstPart);
//     maxSecond = Math.max(...secondPart);
//     // console.log(maxFirst);
//     // console.log(maxSecond);

//     result = Math.abs(maxFirst - maxSecond);
//     // console.log(result);
//     if (result > maxDifference) {
//       maxDifference = result
//     }
//     // console.log(maxDifference);
//   }
//   console.log(maxDifference);
// };

// findMaxDifference([4, 3, 2, 5, 1, 1], 6);

const array = [1, 2, 3];

const newNumber = 3;

let newArray = []

array.forEach((number) => {
  if (number == 2) {
    number = newNumber;
  }
})

console.log(newArray);









