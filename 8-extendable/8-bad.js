/**
 * Principles: Extendable
 */

const number = 1;
const arrayOfNumber = [1,2,3];

function printIndex(num, array) {
  let numIndex;

  array.foreach((value, index) => {
    if (value === num) {
      numIndex = index;
      break;
    } else {
      continue;
    }
  })

  if (numIndex === null) {
    console.log('Found the index in', numIndex);
  } else {
    console.log('Index not found');
  }
}

printIndex(number, arrayOfNumber);