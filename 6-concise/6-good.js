/**
 * Principles: Be Concise
 */

const sampleArray = [1,2,3,4,5];

function sumArray(array) {
  // let sum = 0;
  let sum = array.reduce((acc, curr) => acc + curr);
  // array.forEach(value => {
  //   sum += value;
  // });

  return sum;
}

sumArray(sampleArray);