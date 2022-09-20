-- CREATE jurusan
CREATE TABLE jurusan (
  id_jurusan VARCHAR(4) PRIMARY KEY NOT NULL, 
  nama VARCHAR(100) NOT NULL
  );

 --INSERT INTO jurusan
INSERT INTO jurusan 
VALUES ('J001', 'Teknik Informatika'), ('J002', 'Sistem Informasi'), ('J003', 'Ilmu Komputer');

-- CREATE mahasiswa
CREATE TABLE mahasiswa (
  NIM VARCHAR(4) PRIMARY KEY NOT NULL, 
  nama VARCHAR(100) NOT NULL, 
  alamat TEXT ONT NULL, 
  jurusan VARCHAR(4) NOT NULL FOREIGN KEY (jurusan) REFERENCES jurusan(id_jurusan)
  );

-- INSERT data to mahasiswa 
INSERT INTO mahasiswa 
VALUES ('M001', 'Wahyu Candra', 'Ringin Anom rt 02 rw 04 Kediri' , 'J001'), ('M002', 'Winarmoko', 'Ringin pitu rt 03 rw 01 Kediri' , 'J001'), ('M003', 'Andri Kurniadi', 'Sedayu rt 04 rw 06 Kediri ' , 'J002'), ('M004', 'Tyo Surya', 'Tunggangri rt 05 rw 05 Trenggalek' , 'J002'), ('M005', 'Saiful Nizar', 'Ngantru rt 08 rw 01 Tulungagung' , 'J003'), ('M006', 'Yohan Haryono', 'Sendang rt 03 rw 03 Tulungagung' , 'J003');

-- CREATE dosen
CREATE TABLE dosen ( 
  NIP VARCHAR(4) PRIMARY KEY NOT NULL, 
  nama_dosen VARCHAR(100) NOT NULL
  );

-- INSERT data to dosen
INSERT INTO dosen 
VALUES ('D001', 'Shandika Galih'), ('D002', 'Krisna Galuh'), ('D003', 'Faqiza Muklis'), ('D004', 'Fajar Rohmat');

-- create mata_kuliah
CREATE TABLE mata_kuliah (
  id_matkul VARCHAR(4) PRIMARY KEY NOT NULL, 
  nama_matkul VARCHAR(50) NOT NULL, 
  SKS INT(1) NOT NULL
  );

-- INSERT data to mata_kuliah 
INSERT INTO mata_kuliah 
VALUES ('K001', 'PBO', '4'), ('K002', 'Matematika Diskrit', '6'),('K003', 'Alpro', '6'),('K004', 'Data Mining', '4'),('K005', 'Struktur_data', '6'),('K006', 'Basis_Data', '6');

-- CREATE laporan
CREATE TABLE laporan (
  id_laporan VARCHAR(4) PRIMARY KEY NOT NULL, 
  NIM VARCHAR(4) NOT NULL, 
  id_matkul VARCHAR(4) NOT NULL, 
  NIP VARCHAR(4) NOT NULL, 
  id_jurusan VARCHAR(4), 
  nilai VARCHAR(2), 
  FOREIGN KEY(NIM) REFERENCES mahasiswa (NIM), 
  FOREIGN KEY(id_matkul) REFERENCES mata_kuliah(id_matkul), 
  FOREIGN KEY(id_jurusan) REFERENCES jurusan(id_jurusan), 
  FOREIGN KEY(NIP) REFERENCES dosen(NIP));

-- INSERT INTO laporan
INSERT INTO laporan 
VALUES ('L001', 'M001', 'K001', 'D001', 'J001', 'B'), ('L002', 'M002', 'K002', 'D002', 'J002', 'B'), ('L003', 'M003', 'K003', 'D003', 'J003', 'A'), ('L004', 'M004', 'K004', 'D004', 'J004', 'C');

-- 1
select mahasiswa.NIM, mahasiswa.nama, mahasiswa.alamat, jurusan.nama_jurusan from mahasiswa join  jurusan on mahasiswa.jurusan = jurusan.id_jurusan;

-- 2
ALTER TABLE mahasiswa add column umur INTEGER;
UPDATE mahasiswa set umur = 19 where NIM = 'M001';
UPDATE mahasiswa set umur = 20 where NIM = 'M002';
UPDATE mahasiswa set umur = 22 where NIM = 'M003';
UPDATE mahasiswa set umur = 21 where NIM = 'M004';
UPDATE mahasiswa set umur = 19 where NIM = 'M005';
UPDATE mahasiswa set umur = 20 where NIM = 'M006';
SELECT * FROM mahasiswa WHERE umur < 20;

-- 3
SELECT mahasiswa.* , laporan.nilai FROM mahasiswa JOIN laporan ON mahasiswa.NIM = laporan.NIM WHERE laporan.nilai ='A' OR laporan.nilai = 'B';
SELECT mahasiswa.NIM, mahasiswa.nama,laporan.nilai FROM mahasiswa JOIN laporan ON laporan.NIM = mahasiswa.NIM WHERE nilai LIKE 'B' OR nilai LIKE 'A';

-- 4
SELECT mahasiswa.nama, laporan.NIM, SUM(mata_kuliah.SKS) FROM laporan JOIN mahasiswa ON mahasiswa.NIM=laporan.NIM JOIN mata_kuliah ON mata_kuliah.id_matkul=laporan.id_matkul GROUP BY mahasiswa.nama HAVING SUM(mata_kuliah.SKS)>10;

-- 5
SELECT mahasiswa.nama, laporan.NIM, mata_kuliah.nama_matkul FROM laporan JOIN mahasiswa ON mahasiswa.NIM=laporan.NIM JOIN mata_kuliah ON mata_kuliah.id_matkul=laporan.id_matkul WHERE mata_kuliah.nama_matkul='Data Mining';

-- 6
SELECT laporan.NIP, dosen.nama_dosen, COUNT( DISTINCT laporan.NIM), mahasiswa.nama FROM laporan JOIN mahasiswa ON mahasiswa.NIM=laporan.NIM JOIN dosen ON dosen.NIP=laporan.NIP GROUP BY dosen.NIP; 

-- 7
SELECT nama, umur from mahasiswa ORDER BY umur ASC;

-- 8
SELECT * FROM laporan JOIN dosen ON dosen.NIP=laporan.NIP JOIN mahasiswa ON mahasiswa.NIM=laporan.NIM WHERE nilai LIKE 'D' OR nilai LIKE 'E';

SELECT mahasiswa.nama, mahasiswa.NIM, mata_kuliah.nama_matkul, dosen.nama_dosen, dosen.NIP, laporan.nilai FROM mata_kuliah, mahasiswa, dosen, laporan WHERE UPPER(laporan.nilai)>'C' AND mahasiswa.NIM=laporan.nim AND laporan.id_matkul=mata_kuliah.id_matkul AND laporan.NIP=dosen.NIP;















