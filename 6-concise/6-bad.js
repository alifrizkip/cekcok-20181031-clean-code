/**
 * Principles: Be Concise
 */

const sampleArray = [1,2,3,4,5];

function sumArray(array) {
  let sum = 0;
  const countArray = array.length;
  for (let i = 0; i < countArray; i++) {
    const value = array[i];
    sum = sum + value;
  }

  return sum;
}

sumArray(sampleArray);