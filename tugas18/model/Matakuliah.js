import { db } from '../index.js'

export class Matakuliah {
    static baca(callback) {
        const seluruhMatakuliah = `SELECT * FROM matakuliah`;
        db.all(seluruhMatakuliah, [], (err, rows) => {
            callback(err, rows)
        })
    }
    static cari(id_matakuliah, callback) {
        const cariMatakuliah = `SELECT * FROM matakuliah WHERE matakuliah.id_matakuliah = ?`
        db.get(cariMatakuliah, [id_matakuliah], (err, matakuliah) => {
            callback(err, matakuliah)
        })
    }
    static tambah(id_matakuliah, nama, sks, id_jurusan, callback) {
        const tambahMatakuliah = `INSERT INTO matakuliah(id_matakuliah, nama, sks, id_jurusan) values (?, ? ,? ,?)`
        db.get(tambahMatakuliah, [id_matakuliah, nama, sks, id_jurusan], (err) => { callback(err) })
    }
    static hapus(id_matakuliah, callback){
        const hapusMatakuliah = 'DELETE FROM matakuliah WHERE matakuliah.id_matakuliah = ?'
        db.run(hapusMatakuliah, [id_matakuliah], (err) => {callback(err)})
    }
}