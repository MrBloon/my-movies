// const sum = (array, X) => {
//   let end = array.length - 1;
//   let sum = 0;
//   for (let i = 0; i < array.length - 2; i++) {
//     let z = i + 1;
//     for ( let j = 0; j < end; j++) {
//       if (array[i] + array[z] == X) {
//         sum++
//       }
//       z++
//     }
//     end--
//   }
//   console.log(sum);
// };

const sum = (array, X) => {
  // let end = array.length - 1;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // let z = i + 1;
    // for ( let j = 0; j < end; j++) {
      console.log(array[i]);
      if (array[i] == X) {
        sum++
      }
      // z++
    // }
    // end--
  }
  console.log("sum", sum);
};


// sum ([1, 4, 9, 16, 25, 36, 49, 64, 81, 100], 100);



// const powerSum = (X, N) => {
//   const array = [];
//   let square = 1;
//   while ( square**N <= X ) {
//       array.push(square**N);
//       square++
//   }

//   console.log("array", array);

//   let end = array.length - 1;
//   let sum = 0;
//   for (let i = 0; i < array.length - 2; i++) {
//     let z = i + 1;
//     for ( let j = 0; j < end; j++) {
//       if (array[i] + array[z] == X) {
//         sum++
//       }
//       z++
//     }
//     end--
//   }
//   console.log("sum", sum);

// };


// powerSum(100, 3);


const factorialSum = (num) => {
  if(num <= 0) {
    return 0
  } else {
    console.log(num);
    return num + factorialSum(num  - 1)
  }
};

factorialSum(5)
// returns 15
