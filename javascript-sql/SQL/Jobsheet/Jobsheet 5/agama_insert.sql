use sekolah;

insert into agama (nama) values 
('Islam'),
('Protestan'),
('Katholik'),
('Budha'),
('Hindu');

drop table agama;

create table agama (
kode int auto_increment primary key,
nama varchar(45) not null
);

select * from agama;
select * from siswa;