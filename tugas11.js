const fs = require('fs');
const readline = require('readline');

const file = fs.readFileSync('data.json');
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
console.log(`Pertanyaan: ${data[count].definition}`); // jokowi
rl.prompt();

rl.on('line', input => {
  if (input.toLowerCase() == data[count].term) {
    count++;
    if (count == data.length) {
      console.log('Selamat Anda Benar\n');
      console.log('Hore Anda Menang');
      process.exit(0);
    }
    console.log('Selamat Anda Benar!\n');
    console.log(`Pertanyaan: ${data[count].definition}`); // 1945
  } else {
    console.log('Wkwkwkwk, Anda kurang beruntung');
  }
  rl.prompt();
});
