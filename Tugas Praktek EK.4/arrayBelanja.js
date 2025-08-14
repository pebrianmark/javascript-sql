let daftarSepatu = [
  { nama: "New Balance NB530", harga: 390000 },
  { nama: "Nike Vomero 5", harga: 350000 },
  { nama: "Adidas Samba", harga: 180000 },
  { nama: "Onitsuka Tiger Mexico", harga: 420000 }
];


console.log("===== Rincian Belanja Sepatu =====");
let totalHarga = 0;
daftarSepatu.forEach((item, index) => {
  totalHarga += item.harga;
  console.log(`${index + 1}. ${item.nama} - Rp. ${item.harga}`);
});


let diskonPersen = 0;
if (totalHarga >= 800000) {
  diskonPersen = 15; 
} else if (totalHarga >= 500000) {
  diskonPersen = 10; 
} else if (totalHarga >= 250000) {
  diskonPersen = 5; 
}

let diskon = (totalHarga * diskonPersen) / 100;
let totalSetelahDiskon = totalHarga - diskon;

let pembayaran = 1200000;
let kembalian = pembayaran - totalSetelahDiskon;

console.log(`\nTotal Belanja = Rp. ${totalHarga}`);
console.log(`Diskon = ${diskonPersen}%`);
console.log(`Total Setelah Diskon = Rp. ${totalSetelahDiskon}`);
console.log(`Pembayaran = Rp. ${pembayaran}`);
console.log(`Kembalian = Rp. ${kembalian}`);
