let daftarBelanja = [];

daftarBelanja.push("Beras");
daftarBelanja.push("Minyak");
daftarBelanja.push("Gula");
daftarBelanja.push("Telur");
daftarBelanja.push("Sayur");
daftarBelanja.push("Buah");

daftarBelanja.splice(1,1);

daftarBelanja.sort();

console.log("Daftar Belanja Ibu Lily : ");

for(let i = 0 ; i < daftarBelanja.length; i++){
    console.log(`${i + 1} . ${daftarBelanja[i]}`);
}