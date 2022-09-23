class Car {
  constructor(pintu, merkban, tahun, garansi, ukuran) {
      this.pintu = pintu;
      this.ban = new Tyre(merkban);
      this.tahun = tahun;
      this.garansi = garansi;
      this.ukuran = ukuran;
  }
}

class Tyre {
  constructor(merk, ukuran) {
      this.merk = merk;
      this.ukuran = ukuran;
  }
}

class Agya extends Car {
  constructor(tahun) {
      super(4, 'Dunlop', tahun)
      this.garansi = 3;
      this.type = 'Toyota Agya';
      this.ukuran = '14 inch'
   }
}

class Rush extends Car {
  constructor(tahun) {
      super(5, 'Bridgestone', tahun)
      this.garansi = 5;
      this.type = 'Toyota Rush';
      this.ukuran = '17 inch'
  }
}

class CarFactory {
  constructor() {
      this.cars = []
  }

  static acak() {
      return Math.floor(Math.random() * 9)
  }

  produksi(tahun) {
      for (let i = 0; i < CarFactory.acak(); i++) {
          this.cars.push(new Agya(tahun))
      }
      for (let i = 0; i < CarFactory.acak(); i++) {
          this.cars.push(new Rush(tahun))
      }
  }

  warranty(year) {
      console.log(`Pada tahun ${year} Toyota memproduksi mobil sebanyak ${this.cars.length} unit: `);
      this.cars.forEach(content => {
          console.log(`
          Nama Mobil: ${content.type}
          Jumlah Pintu: ${content.pintu}
          Merk Ban: ${content.ban.merk}
          Ukuran Ban: ${content.ukuran}
          Tahun Pembuatan: ${content.tahun}
          Garansi : ${content.garansi} Tahun
          Masa berlaku garansi: ${(year - content.tahun) > content.garansi ? 'Tidak berlaku' : 'Masih berlaku'}
          ===================================
          `)
      })
  }
}

let pabrik = new CarFactory();

pabrik.produksi(2022);
pabrik.warranty(2022);