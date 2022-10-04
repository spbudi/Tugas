import { rl } from '../index.js';
import { Interface } from '../index.js';
import { garis } from '../index.js';
import { Matakuliah } from '../model/Matakuliah.js';
import { ViewMatakuliah } from '../view/Vmatakuliah.js';
import Table from 'cli-table';
import { JurusanController } from './Cjurusan.js';

export class MatakuliahController {
  static menu() {
    console.log(garis);
    ViewMatakuliah.menu();
    rl.question(
      `${garis}\nmasukkan salah satu no. dari opsi diatas:`,
      (userInput) => {
        switch (userInput) {
          case '1':
            MatakuliahController.baca();
            break;
          case '2':
            MatakuliahController.cari();
            break;
          case '3':
            MatakuliahController.tambah();
            break;
          case '4':
            MatakuliahController.hapus();
            break;
          case '5':
            Interface.menu();
            break;
          default:
            console.log(garis);
            console.log('Masukkan pilihan dengan benar');
            MatakuliahController.menu();
            break;
        }
      }
    );
  }
  static baca(callback) {
    console.log(garis);
    var table = new Table({
      head: ['ID Matakuliah', 'Nama', 'SKS', 'ID Jurusan'],
    });
    Matakuliah.baca(function (err, data) {
      if (err) {
        throw err;
      }
      data.forEach((matakuliah) => {
        table.push([
          matakuliah.id_matakuliah,
          matakuliah.nama,
          matakuliah.sks,
          matakuliah.id_jurusan,
        ]);
      });
      console.log(table.toString());
      if (callback) {
        callback();
      } else {
        MatakuliahController.menu();
      }
    });
  }
  static cari() {
    console.log(garis);
    rl.question(`Masukkan ID matakuliah:`, (id_matakuliah) => {
      Matakuliah.cari(id_matakuliah, (err, matakuliah) => {
        if (err) {
          throw err;
        }
        if (matakuliah) {
          console.log(
            `${garis}\nmatakuliah details\n${garis}\nID         : ${matakuliah.id_matakuliah}\nNama       : ${matakuliah.nama}\nSKS        : ${matakuliah.sks}\nID jurusan : ${matakuliah.id_jurusan}`
          );
        } else {
          console.log(garis);
          console.log(`matakuliah dengan nim ${id_matakuliah} tidak terdaftar`);
        }
        MatakuliahController.menu();
      });
    });
  }

  static tambah() {
    console.log(garis);
    console.log('lengkapi data di bawah ini:');
    rl.question('ID Matakuliah  : ', (id_matakuliah) => {
      rl.question('Nama           : ', (nama) => {
        rl.question(`SKS            : `, (sks) => {
          JurusanController.baca(function () {
            rl.question('ID Jurusan     : ', (jurusan) => {
              Matakuliah.tambah(id_matakuliah, nama, sks, jurusan, (err) => {
                if (err) {
                  throw err;
                } else {
                  console.log(
                    `Matakuliah dengan ID ${id_matakuliah} telah didaftarkan.`
                  );
                  MatakuliahController.menu();
                }
              });
            });
          });
        });
      });
    });
  }
  static hapus() {
    rl.question(
      `${garis}\nmasukkan ID matakuliah yang akan dihapus:`,
      (id_matakuliah) => {
        Matakuliah.hapus(id_matakuliah, (err) => {
          if (!err)
            console.log(
              `\n${garis}\nMatakuliah dengan ID:${id_matakuliah}, telah dihapus.`
            );
          MatakuliahController.baca();
        });
      }
    );
  }
}
