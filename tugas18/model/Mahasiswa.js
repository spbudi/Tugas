import { db } from '../index.js'

export class Mahasiswa {
    static baca(callback) {
        const seluruhMahasiswa = `SELECT * FROM mahasiswa`;
        db.all(seluruhMahasiswa, [], (err, rows) => {
            callback(err, rows)
        })
    }
    static cari(nim, callback) {
        const cariMahasiswa = `SELECT * FROM mahasiswa WHERE mahasiswa.nim = ?`
        db.get(cariMahasiswa, [nim], (err, mahasiswa) => {
            callback(err, mahasiswa)
        })
    }
    static tambah(nim, nama, tanggallahir, alamat, jurusan, callback) {
        const tambahMahasiswa = `INSERT INTO mahasiswa(nim, nama, tanggallahir, alamat, id_jurusan) values (?, ? ,? ,?, ?)`
        db.get(tambahMahasiswa, [nim, nama, tanggallahir, alamat, jurusan], (err) => { callback(err) })
    }
    static hapus(nim, callback){
        const hapusMahasiswa = 'DELETE FROM mahasiswa WHERE mahasiswa.nim = ?'
        db.run(hapusMahasiswa, [nim], (err) => {callback(err)})
    }
}