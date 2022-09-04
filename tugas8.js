function pola(str) {
  let splitAngka = str.split(" ")
  let ambilIdxPertama = splitAngka[0]
  let ambilIdxKedua = splitAngka[2]
  let ambulIdxKetiga = splitAngka[4]

  let hasil = [];

for (let i = 0; i < 10; i++) {
  let ubahIdxPertama = ambilIdxPertama.replace('#', i);
  for (let j = 0; j < 10; j++) {
    let ubahIdxKetiga = ambulIdxKetiga.replace('#', j);
    if (Number(ubahIdxPertama) * ambilIdxKedua === Number(ubahIdxKetiga)) {
      hasil.push(i, j);
    }
  }
}
return hasil
}

console.log(pola("42#3 * 188 = 80#204"))
console.log(pola("8#61 * 895 = 78410#5"))


