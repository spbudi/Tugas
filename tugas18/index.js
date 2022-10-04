import fs from 'fs';
let data = fs.readFileSync('username.json', 'utf-8');
var user = JSON.parse(data);

import readline from 'readline';
export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

import sqlite3 from 'sqlite3';
import { MahasiswaController } from './controller/Cmahasiswa.js';
import { JurusanController } from './controller/Cjurusan.js';
import { DosenController } from './controller/Cdosen.js';
import { KontrakController } from './controller/Ckontrak.js';
import { MatakuliahController } from './controller/Cmatakuliah.js';
export const db = new sqlite3.Database(
  './univ.db',
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);
  }
);

export const garis = '====================================================';

export class Interface {
  static readline() {
    rl.question(
      `${garis}\nmasukkan salah satu no. dari opsi diatas:`,
      (userInput) => {
        switch (userInput) {
          case '1':
            MahasiswaController.menu();
            break;
          case '2':
            JurusanController.menu();
            break;
          case '3':
            DosenController.menu();
            break;
          case '4':
            MatakuliahController.menu();
            break;
          case '5':
            KontrakController.menu();
            break;
          case '6':
            console.log('Anda telah keluar.');
            rl.close();
            break;
          default:
            console.log(garis);
            console.log('Masukkan pilihan dengan benar');
            Interface.readline();
            break;
        }
      }
    );
  }
  static menu() {
    console.log(garis);
    console.log(`silahkan pilih opsi di bawah ini`);
    console.log(`[1] mahasiswa`);
    console.log(`[2] jurusan`);
    console.log(`[3] dosen`);
    console.log(`[4] mata kuliah`);
    console.log(`[5] kontrak`);
    console.log(`[6] keluar`);
    Interface.readline();
  }
}

console.log(garis);
console.log(
  'Welcome to Universitas Pendidikan Indonesia\nJl Setiabudhi No. 255'
);
console.log(garis);

rl.question(`username: `, (username) => {
  rl.question('password: ', (password) => {
    if (user[0].username === username && user[0].password === password) {
      console.log(garis);
      console.log(`Welcome, ${username}. Your access level is ADMIN`);
      Interface.menu();
    } else {
      console.log('Anda belum terdaftar');
      rl.close();
    }
  });
});
