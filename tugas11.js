const fs = require('fs');
const readline = require('readline');

const file = fs.readFileSync('data.json');
// const file = fs.readFileSync('data.json');
const data = JSON.parse(file);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tebakan: ',
});

let count = 0;
console.log(
  'Selamat datang di permainan Tebak Kata, silakan isi dengan jawaban yang benar!\n'
);
console.log(`Pertanyaan: ${data[count].definition}`);
rl.prompt();

rl.on('line', (input) => {
  if (count < data.length - 1) {
    if (input.toLocaleLowerCase() !== data[count].term) {
      console.log('Wkwkwkw, Anda Kurang beruntung!');
      rl.prompt();
    } else {
      count++;
      console.log('Selamat Anda Benar!\n');
      console.log(`pertanyaan ${data[count].definition}`);
      rl.prompt();
    }
  // }
  } else if (input.toLocaleLowerCase() !== data[count].term) {
    console.log('Wkwkwkw, Anda kurang beruntung!');
    rl.prompt();
  } else {
    console.log('Selamat anda benar!\n');
    console.log('Hore Anda Menang!');
    process.exit(0);
  }
});
// }).on('close', () => {
//   console.log('Terima Kasih');
//   process.exit(0);
// });
