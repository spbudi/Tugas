function stringManipulation(word) {
  if (word.startsWith('a') || word.startsWith('i') || word.startsWith('u') || word.startsWith('e') || word.startsWith('o') || word.startsWith('A') || word.startsWith('I') || word.startsWith('U') || word.startsWith('E') || word.startsWith('O')) {
    console.log(word)
  } else{
    console.log(`${word.substr(1)} nyo`.replace(' ', word[0]));
  }

}

stringManipulation('ayam');
stringManipulation('bebek');
stringManipulation('ITIK');