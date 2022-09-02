function sentencesManipulation(sentence) {
  let str = '';
  let splitWords = sentence.split(' ');
  for (let i = 0; i < splitWords.length; i++) {
      let words = splitWords[i];
      let ambilKarakterDepan = splitWords[i].charAt(0)
      if (words.startsWith('a') || words.startsWith('i') || words.startsWith('u') || words.startsWith('e') || words.startsWith('o')){
          str += splitWords[i] + ' '
      } else {
          str += splitWords[i].substr(1)+ambilKarakterDepan[0]+"nyo"+" "
      }
  }
  console.log(str)
}
sentencesManipulation('abu pergi ke pasar bersama aku')