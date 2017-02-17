// Create a function that takes two strings and returns an array of characters that consitst all the common letters of the two arrays

function giveMeBackTheSameLetters(input, input2) {
  let commonCharArray = [];
  for (var i = 0; i < input.length; i++) {
    console.log();
    for (var j = 0; j < input2.length; j++) {
      // console.log(input2[j]);
      if (input[i] === input2[j]) {
        // console.log('inp1' + input[i]);
        // console.log('inp2' + input2[j]);
         commonCharArray.push(input2[j]);
      }
    }
  }
  return commonCharArray;
}

console.log(giveMeBackTheSameLetters('car', 'bar'));
console.log(giveMeBackTheSameLetters('war', 'thor'));
