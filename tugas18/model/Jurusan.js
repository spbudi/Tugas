import { db } from '../index.js'

export class Jurusan {
    static baca(callback) {
        const seluruhJurusan = `SELECT * FROM jurusan`;
        db.all(seluruhJurusan, [], (err, rows) => {
            callback(err, rows)
        })
    }
    static cari(id_jurusan, callback) {
        const cariJurusan = `SELECT * FROM jurusan WHERE jurusan.id_jurusan = ?`
        db.get(cariJurusan, [id_jurusan], (err, jurusan) => {
            callback(err, jurusan)
        })
    }
    static tambah(id_jurusan, nama, callback) {
        const tambahJurusan = `INSERT INTO jurusan(id_jurusan,nama) values (?, ? )`
        db.get(tambahJurusan, [id_jurusan, nama], (err) => { callback(err) })
    }
    static hapus(id_jurusan, callback){
        const hapusJurusan = 'DELETE FROM jurusan WHERE jurusan.id_jurusan = ?'
        db.run(hapusJurusan, [id_jurusan], (err) => {callback(err)})
    }
}