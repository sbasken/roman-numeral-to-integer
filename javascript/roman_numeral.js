function romanNumeral(string) {
  const symbols = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let result = 0;

  for (let i = 0; i < string.length; i++) {
    let currentSymbolValue = symbols[string[i]];
    let nextSymbolValue = symbols[string[i + 1]];

    if (currentSymbolValue >= nextSymbolValue || nextSymbolValue === undefined) {
      result += currentSymbolValue;
    } else {
      result -= currentSymbolValue;
    }
  }

  return result;
}

if (require.main === module) {
  // add your own tests in here

  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
