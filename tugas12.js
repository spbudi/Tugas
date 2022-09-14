
const fs = require('fs');
const readline = require('readline');

if (!process.argv[2]){
  console.log('Tolong sertakan nama file sebagai inputan soalnya\nMisalnya "node solution.js data.json"');
  process.exit(0)
}
const file = fs.readFileSync(process.argv[2]);
const data = JSON.parse(file);

console.log('Selamat datang di permainan Tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini \'data.json\'.\nUntuk bermain, jawablah dengan jawaban yang sesuai.\nGunakan skip untuk menangguhkan pertanyaanya, dan di akhir pertanyaan akan ditanyakan lagi.\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Tebakan: ',
});

// console.log('Selamat datang di permainan Tebak Kata, silakan isi dengan jawaban yang benar!\n');

let count = 0;
let salah = 0;

console.log(`Pertanyaan: ${data[count].definition}`);
rl.prompt();

rl.on('line', input => {
  if (input.toLowerCase() == data[count].term) {
    count++;
    if (count == data.length) {
      console.log('Anda beruntung!\n');
      console.log('Anda berhasil!');
      process.exit(0);
    }
    console.log('Anda Beruntung!\n');
    console.log(`Pertanyaan: ${data[count].definition}`);
  } else if(input.toLowerCase() == 'skip'){
    data.push(data[count])
    count++
    salah = 0
    console.log(`Pertanyaan: ${data[count].definition}`)
    rl.prompt()

  } else {
    salah++
    console.log(`Anda kurang beruntung! anda telah salah ${salah} kali, silahkan coba lagi\n`);
  }
  rl.prompt();
});