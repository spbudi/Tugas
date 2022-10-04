import { db } from '../index.js'

export class Dosen {
    static baca(callback) {
        const seluruhDosen = `SELECT * FROM dosen`;
        db.all(seluruhDosen, [], (err, rows) => {
            callback(err, rows)
        })
    }
    static cari(id_dosen, callback) {
        const cariDosen = `SELECT * FROM dosen WHERE dosen.id_dosen = ?`
        db.get(cariDosen, [id_dosen], (err, dosen) => {
            callback(err, dosen)
        })
    }
    static tambah(id_dosen, nama, callback) {
        const tambahDosen = `INSERT INTO dosen(id_dosen,nama) values (?, ?)`
        db.get(tambahDosen, [id_dosen, nama], (err) => { callback(err) })
    }
    static hapus(id_dosen, callback){
        const hapusDosen = 'DELETE FROM dosen WHERE dosen.id_dosen = ?'
        db.run(hapusDosen, [id_dosen], (err) => {callback(err)})
    }
}