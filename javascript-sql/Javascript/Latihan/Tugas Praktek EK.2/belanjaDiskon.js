const hargaHeadset = 225000;
const hargaMouse = 150000;
const hargaKeyboard = 350000;

// Hitung
const totalBelanja = hargaHeadset + hargaMouse + hargaKeyboard;

let persentaseDiskon = 0;
if (totalBelanja >= 800000) {
    persentaseDiskon = 0.15;
} else if (totalBelanja >= 500000) {
    persentaseDiskon = 0.10;
} else if (totalBelanja >= 250000) {
    persentaseDiskon = 0.05;
}

const nilaiDiskon = totalBelanja * persentaseDiskon;
const totalSetelahDiskon = totalBelanja - nilaiDiskon;

const pembayaran = 800000;

const kembalian = pembayaran - totalSetelahDiskon;

// Tampilkan hasil ke layar
console.log("===Rincian Belanja===");
console.log(`Headset  : Rp. ${hargaHeadset}`);
console.log(`Mouse    : Rp. ${hargaMouse}`);
console.log(`Keyboard : Rp. ${hargaKeyboard}`);
console.log("-------------------------------");
console.log(`Total Belanja        : Rp. ${totalBelanja}`);
console.log(`Diskon               : Rp. ${nilaiDiskon}`);
console.log(`Total Setelah Diskon : Rp. ${totalSetelahDiskon}`);
console.log(`Dibayar              : Rp. ${pembayaran}`);
console.log(`Kembalian            : Rp. ${kembalian}`);
