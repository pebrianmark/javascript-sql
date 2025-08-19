use sekolah;

create view vw_agama_siswa as
		select siswa.nis as NIS,
        siswa.nama as Nama_siswa,
        agama.nama as Agama_Siswa
from siswa, agama
where siswa.kd_agama = agama.kode;

select * from agama;