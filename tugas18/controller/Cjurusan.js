import { rl } from '../index.js';
import { Interface } from '../index.js';
import { garis } from '../index.js';
import { Jurusan } from '../model/Jurusan.js';
import { ViewJurusan } from '../view/Vjurusan.js';
import Table from 'cli-table';

export class JurusanController {
  static menu() {
    console.log(garis);
    ViewJurusan.menu();
    rl.question(
      `${garis}\nmasukkan salah satu no. dari opsi diatas:`,
      (userInput) => {
        switch (userInput) {
          case '1':
            JurusanController.baca();
            break;
          case '2':
            JurusanController.cari();
            break;
          case '3':
            JurusanController.tambah();
            break;
          case '4':
            JurusanController.hapus();
            break;
          case '5':
            Interface.menu();
            break;
          default:
            console.log(garis);
            console.log('Masukkan pilihan dengan benar');
            JurusanController.menu();
            break;
        }
      }
    );
  }
  static baca(callback) {
    console.log(garis);
    var table = new Table({
      head: ['ID Jurusan', 'Nama Jurusan'],
    });
    Jurusan.baca(function (err, data) {
      if (err) {
        throw err;
      }
      data.forEach((jurusan) => {
        table.push([jurusan.id_jurusan, jurusan.nama]);
      });
      console.log(table.toString());
      if (callback) {
        callback();
      } else {
        JurusanController.menu();
      }
    });
  }
  static cari() {
    console.log(garis);
    rl.question(`Masukkan ID Jurusan:`, (id_jurusan) => {
      Jurusan.cari(id_jurusan, (err, jurusan) => {
        if (err) {
          throw err;
        }
        if (jurusan) {
          console.log(
            `${garis}\nJurusan Detail\n${garis}\nID Jurusan    : ${jurusan.id_jurusan}\nNama Jurusan  : ${jurusan.nama}`
          );
        } else {
          console.log(garis);
          console.log(`Jurusan dengan ID ${id_jurusan} tidak terdaftar`);
        }
        JurusanController.menu();
      });
    });
  }

  static tambah() {
    console.log(garis);
    console.log('lengkapi data di bawah ini:');
    rl.question(`ID Jurusan     :`, (id_jurusan) => {
      rl.question('Nama Jurusan   :', (nama) => {
        Jurusan.tambah(id_jurusan, nama, (err) => {
          if (err) {
            throw err;
          } else {
            console.log(`Jurusan dengan ID ${id_jurusan} telah didaftarkan.`);
            JurusanController.menu();
          }
        });
      });
    });
  }

  static hapus() {
    rl.question(
      `${garis}\nmasukkan ID Jurusan yang akan dihapus:`,
      (id_jurusan) => {
        Jurusan.hapus(id_jurusan, (err) => {
          if (!err)
            console.log(
              `\n${garis}\nJurusan dengan ID:${id_jurusan}, telah dihapus.`
            );
          JurusanController.baca();
        });
      }
    );
  }
}
