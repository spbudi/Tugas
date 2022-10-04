import { db } from '../index.js'

export class Kontrak {
    static baca(callback) {
        const seluruhKontrak = `SELECT * FROM kontrak`;
        db.all(seluruhKontrak, [], (err, rows) => {
            callback(err, rows)
        })
    }
    static cari(no, callback) {
        const cariKontrak = `SELECT * FROM kontrak WHERE kontrak.no = ?`
        db.get(cariKontrak, [no], (err, kontrak) => {
            callback(err, kontrak)
        })
    }
    static tambah(nim, id_matakuliah, id_dosen,callback) {
        const tambahKontrak = `INSERT INTO kontrak(nim, id_matakuliah, id_dosen, nilai) values (?, ? ,?)`
        db.get(tambahKontrak, [nim, id_matakuliah, id_dosen,], (err) => { callback(err) })
    }
    static hapus(no, callback){
        const hapusKontrak = 'DELETE FROM kontrak WHERE kontrak.no = ?'
        db.run(hapusKontrak, [no], (err) => {callback(err)})
    }
    static tambahNilai(nilai, no, callback){
        const tambahNilai = 'UPDATE kontrak set nilai = ? WHERE kontrak.no = ?'
        db.run(tambahNilai, [nilai, no], (err)=>{callback (err)})
    }
}