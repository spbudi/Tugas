const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tulis kalimatmu disini > '
});

rl.prompt();

rl.on('line', (line) => {
  function sentenceManipulation(sentence) {
    let jadikanArr = sentence.split(' ');
    let str = '';
    // console.log(jadikanArr);
    for (let i = 0; i < jadikanArr.length; i++) {
      let idxKeI = jadikanArr[i].charAt(0);
      if (
        idxKeI.toLowerCase() == 'a' ||
        idxKeI.toLowerCase() == 'i' ||
        idxKeI.toLowerCase() == 'u' ||
        idxKeI.toLowerCase() == 'e' ||
        idxKeI.toLowerCase() == 'o'
      ) {
        str += jadikanArr[i] + ' ';
      } else {
        str += ` ${jadikanArr[i].slice(1)}${jadikanArr[i][0]}nyo `.replace(' ', '');
        // str += jadikanArr[i].slice(1) + jadikanArr[i][0] + 'nyo' + ' ';
      }
    }
    return str;
    // for (let i = 0; i < sentence.length; i++){
    //   console.log(sentence[i]);
    // };
  }
  
  console.log('Hasil konversi > ' + sentenceManipulation(line.trim())); 
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});