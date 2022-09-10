function spiral(param1) {
  let list = [];

  let arr = [];
  for (let i = 0; i < param1; i++) { 
      arr[i] = [] // 
      for (let j = 0; j < param1; j++) {
          arr[i][j] = (i * param1) + j
      }
    }
  console.log(arr);
  while (arr.length > 1) { // arr.length 5
      // kanan
      list = list.concat(arr.splice(0, 1)[0]); // [1 sampai 24]
      // bawah
      for (let idx in arr) { // 
          list.push(arr[idx].splice(-1)[0]); // ga ada yg dihapus [0 sampai 24]
      }
      // kiri
      list = list.concat(arr.splice(-1, 1)[0].reverse());
      // atas
      for (let idx = arr.length - 1; idx >= 0; idx--) {
          list.push(arr[idx].splice(0, 1)[0]);
      }
  } if (arr.length > 0) {
      list.push(arr.pop()[0]);
  }
  console.log(list)
}
spiral(5)
// spiral(6)
// spiral(7)