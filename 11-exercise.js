// const STRING = 'Aa kiu, I swd skieo 236587. GH kiu: sieo?? 25.33';
const STRING = 'Ini tahun 2018!?';

const count = (string, pattern) => (string.split('').filter(data => pattern.includes(data))).length

function printAndCountAll(string) {
  const abjadLower = 'abcdefghijklmnopqrstuvwxyz';
  const letterPattern = abjadLower + abjadLower.toUpperCase();

  const totalLetter = count(string, letterPattern)
  const totalSpace = count(string, ' ')
  const totalNumber = count(string, '0123456789')
  const totalOther = string.length - (totalLetter + totalSpace + totalNumber)

  console.log('letter: ', totalLetter);
  console.log('space: ', totalSpace);
  console.log('number: ', totalNumber);
  console.log('other: ', totalOther);
}

// console.log(STRING);
// printAndCountAll(STRING);

// countAll(STRING);
console.log('Masukkan string: ');
process.openStdin().addListener("data", d => {
  let inputString = d.toString().replace(/\n/g, '');
  printAndCountAll(inputString);

  process.exit();
})
