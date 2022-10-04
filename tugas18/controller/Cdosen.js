import { rl } from '../index.js';
import { Interface } from '../index.js';
import { garis } from '../index.js';
import { Dosen } from '../model/Dosen.js';
import { ViewDosen } from '../view/Vdosen.js';
import Table from 'cli-table';

export class DosenController {
  static menu() {
    console.log(garis);
    ViewDosen.menu();
    rl.question(
      `${garis}\nmasukkan salah satu no. dari opsi diatas:`,
      (userInput) => {
        switch (userInput) {
          case '1':
            DosenController.baca();
            break;
          case '2':
            DosenController.cari();
            break;
          case '3':
            DosenController.tambah();
            break;
          case '4':
            DosenController.hapus();
            break;
          case '5':
            Interface.menu();
            break;
          default:
            console.log(garis);
            console.log('Masukkan pilihan dengan benar');
            DosenController.menu();
            break;
        }
      }
    );
  }
  static baca(callback) {
    console.log(garis);
    var table = new Table({
      head: ['ID Dosen', 'Nama Dosen'],
    });
    Dosen.baca(function (err, data) {
      if (err) {
        throw err;
      }
      data.forEach((dosen) => {
        table.push([dosen.id_dosen, dosen.nama]);
      });
      console.log(table.toString());
      if (callback) {
        callback();
      } else {
        DosenController.menu();
      }
    });
  }
  static cari() {
    console.log(garis);
    rl.question(`Masukkan ID Dosen:`, (id_dosen) => {
      Dosen.cari(id_dosen, (err, dosen) => {
        if (err) {
          throw err;
        }
        if (dosen) {
          console.log(
            `${garis}\nDosen Detail\n${garis}\nID Dosen    : ${dosen.id_dosen}\nNama Dosen  : ${dosen.nama}`
          );
        } else {
          console.log(garis);
          console.log(`Dosen dengan ID ${id_dosen} tidak terdaftar`);
        }
        DosenController.menu();
      });
    });
  }

  static tambah() {
    console.log(garis);
    console.log('lengkapi data di bawah ini:');
    rl.question(`ID Dosen     :`, (id_dosen) => {
      rl.question('Nama Dosen   :', (nama) => {
        Dosen.tambah(id_dosen, nama, (err) => {
          if (err) {
            throw err;
          } else {
            console.log(`Dosen dengan ID ${id_dosen} telah didaftarkan.`);
            DosenController.menu();
          }
        });
      });
    });
  }

  static hapus() {
    rl.question(
      `${garis}\nmasukkan ID Dosen yang akan dihapus:`,
      (id_dosen) => {
        Dosen.hapus(id_dosen, (err) => {
          if (!err)
            console.log(
              `\n${garis}\nDosen dengan ID:${id_dosen}, telah dihapus.`
            );
          DosenController.baca();
        });
      }
    );
  }
}
