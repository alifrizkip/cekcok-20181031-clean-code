/**
 * Principles: Extendable
 */

const number = 1;
const arrayOfNumber = [1,2,3];

function findIndex(num, array) {
  array.foreach((value, index) => {
    if (value === num) {
      return index;
    } else {
      continue;
    }
  })
}

function printIndex(num, array) {
  const numIndex = findIndex(num, array);

  if (numIndex === null) {
    console.log('Found the index in', numIndex);
  } else {
    console.log('Index not found');
  }
}

printIndex(number, arrayOfNumber);