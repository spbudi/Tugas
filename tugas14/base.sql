-- create jurusan
create table jurusan (id_jurusan VARCHAR(4) PRIMARY KEY NOT NULL, nama VARCHAR(100) NOT NULL);

-- create mahasiswa
create table mahasiswa (NIM VARCHAR(4) PRIMARY KEY NOT NULL, nama VARCHAR(100) NOT NULL, alamat TEXT ONT NULL, jurusan VARCHAR(4) NOT NULL FOREIGN KEY (jurusan) REFERENCES jurusan(id_jurusan));

-- create mata_kuliah
create table mata_kuliah (id_matkul VARCHAR(4) PRIMARY KEY NOT NULL, nama_matkul VARCHAR(50) NOT NULL, SKS INT(1) NOT NULL);

-- create dosen
create table dosen ( NIP VARCHAR(4) PRIMARY KEY NOT NULL, nama_dosen VARCHAR(100) NOT NULL);

-- create laporan
create table laporan (id_laporan VARCHAR(4) PRIMARY KEY NOT NULL, NIM VARCHAR(4) NOT NULL, id_matkul VARCHAR(4) NOT NULL, NIP VARCHAR(4) NOT NULL, id_jurusan VARCHAR(4), nilai VARCHAR(2), FOREIGN KEY(NIM) REFERENCES mahasiswa (NIM), FOREIGN KEY(id_matkul) REFERENCES mata_kuliah(id_matkul), FOREIGN KEY(id_jurusan) REFERENCES jurusan(id_jurusan), FOREIGN KEY(NIP) REFERENCES dosen(NIP));


-- insert data to dosen
insert into dosen values ('D001', 'Shandika Galih'), ('D002', 'Krisna Galuh'), ('D003', 'Faqiza Muklis'), ('D004', 'Fajar Rohmat'), ('D005', 'Bambang Winarko');
sqlite> select * from dosen;

-- insert data to mata_kuliah 
insert into mata_kuliah values ('K001', 'PBO', '4'), ('K002', 'Matematika Diskrit', '6'),('K003', 'Alpro', '6'),('K004', 'Kalkulus', '4'),('K005', 'Struktur_data', '6'),('K006', 'Basis_Data', '6');

--insert data to mahasiswa 
insert into mahasiswa values ('M001', 'Wahyu Candra', 'Ringin Anom rt 02 rw 04 Kediri' , 'J001'), ('M002', 'Winarmoko', 'Ringin pitu rt 03 rw 01 Kediri' , 'J001'), ('M003', 'Andri Kurniadi', 'Sedayu rt 04 rw 06 Kediri ' , 'J002'), ('M004', 'Tyo Surya', 'Tunggangri rt 05 rw 05 Trenggalek' , 'J002'), ('M005', 'Saiful Nizar', 'Ngantru rt 08 rw 01 Tulungagung' , 'J003'), ('M006', 'Yohan Haryono', 'Sendang rt 03 rw 03 Tulungagung' , 'J003');

--insert into jurusan
insert into jurusan values ('J001', 'Teknik Informatika'), ('J002', 'Sistem Informasi'), ('J003', 'Ilmu Komputer');

-- insert into laporan
insert into laporan values ('L001', 'M001', 'K001', 'D001', 'J001', 'B'), ('L002', 'M002', 'K002', 'D002', 'J002', 'B'), ('L003', 'M003', 'K003', 'D003', 'J003', 'A'), ('L004', 'M004', 'K004', 'D004', 'J004', 'C');








