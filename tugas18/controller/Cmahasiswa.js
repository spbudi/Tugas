import { rl } from '../index.js';
import { Interface } from '../index.js';
import { garis } from '../index.js';
import { Mahasiswa } from '../model/Mahasiswa.js';
import { ViewMahasiswa } from '../view/Vmahasiswa.js';
import Table from 'cli-table';
import { JurusanController } from './Cjurusan.js';

export class MahasiswaController {
  static menu() {
    console.log(garis);
    ViewMahasiswa.menu();
    rl.question(
      `${garis}\nmasukkan salah satu no. dari opsi diatas:`,
      (userInput) => {
        switch (userInput) {
          case '1':
            MahasiswaController.baca();
            break;
          case '2':
            MahasiswaController.cari();
            break;
          case '3':
            MahasiswaController.tambah();
            break;
          case '4':
            MahasiswaController.hapus();
            break;
          case '5':
            Interface.menu();
            break;
          default:
            console.log(garis);
            console.log('Masukkan pilihan dengan benar');
            MahasiswaController.menu();
            break;
        }
      }
    );
  }
  static baca(callback) {
    console.log(garis);
    var table = new Table({
      head: ['nim', 'nama', 'umur', 'alamat', 'jurusan'],
    });
    Mahasiswa.baca(function (err, data) {
      if (err) {
        throw err;
      }
      data.forEach((mahasiswa) => {
        table.push([
          mahasiswa.nim,
          mahasiswa.nama,
          mahasiswa.tanggallahir,
          mahasiswa.alamat,
          mahasiswa.id_jurusan,
        ]);
      });
      console.log(table.toString());
      if (callback) {
        callback();
      } else {
        MahasiswaController.menu();
      }
    });
  }
  static cari() {
    console.log(garis);
    rl.question(`Masukkan NIM:`, (nim) => {
      Mahasiswa.cari(nim, (err, mahasiswa) => {
        if (err) {
          throw err;
        }
        if (mahasiswa) {
          console.log(
            `${garis}\nstudent details\nnim         : ${mahasiswa.nim}\nnama        : ${mahasiswa.nama}\nlahir       : ${mahasiswa.tanggallahir}\nalamat      : ${mahasiswa.alamat}\nid jurusan  : ${mahasiswa.id_jurusan}`
          );
        } else {
          console.log(garis);
          console.log(`mahasiswa dengan nim ${nim} tidak terdaftar`);
        }
        MahasiswaController.menu();
      });
    });
  }

  static tambah() {
    console.log(garis);
    console.log('lengkapi data di bawah ini:');
    rl.question('nim        : ', (nim) => {
      rl.question('nama       : ', (nama) => {
        rl.question('lahir (yyyy-mm-dd): ', (tanggallahir) => {
          rl.question(`alamat     :`, (alamat) => {
            JurusanController.baca(function () {
              rl.question('id jurusan :', (jurusan) => {
                Mahasiswa.tambah(
                  nim,
                  nama,
                  tanggallahir,
                  alamat,
                  jurusan,
                  (err) => {
                    if (err) {
                      throw err;
                    } else {
                      console.log(garis);
                      console.log(
                        `Mahasiswa dengan NIM ${nim} telah didaftarkan.`
                      );
                      MahasiswaController.menu();
                    }
                  }
                );
              });
            });
          });
        });
      });
    });
  }
  static hapus() {
    rl.question(
      `${garis}\nmasukkan NIM mahasiswa yang akan dihapus:`,
      (nim) => {
        Mahasiswa.hapus(nim, (err) => {
          if (!err)
            console.log(
              `\n${garis}\nmahasiswa dengan NIM:${nim}, telah dihapus.`
            );
          MahasiswaController.menu();
        });
      }
    );
  }
}
