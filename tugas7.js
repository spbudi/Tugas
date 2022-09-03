function weirdMultiply(sentence) {
  let ubahKeAngka = sentence.toString();

  if (ubahKeAngka.length === 1) {
    return Number(ubahKeAngka);
  }
  let hasil = 1;

  for (let i = 0; i < ubahKeAngka.length; i++)
    hasil *= Number(ubahKeAngka[i]);

  return weirdMultiply(hasil);
}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));

