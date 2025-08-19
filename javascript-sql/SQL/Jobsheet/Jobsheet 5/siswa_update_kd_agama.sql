use sekolah;

update siswa set kd_agama = '1' where nama regexp '^[NS]';
update siswa set kd_agama = '4' where nama regexp '^D';
select * from siswa;

SET SQL_SAFE_UPDATES = 0;
