const nasiGoreng = 25000;
const mieGoreng = 22000;
const capcay = 32000;

const totalSebelumDiskon = nasiGoreng + mieGoreng + capcay;

const diskon = 0.10;
const jumlahDiskon = totalSebelumDiskon * diskon;

const totalSetelahDiskon = totalSebelumDiskon - jumlahDiskon;

const pembayaran = 100000;

const kembalian = pembayaran - totalSetelahDiskon;

console.log("Harga Nasi Goreng = Rp." + nasiGoreng);
console.log("Harga Mie Goreng = Rp." + mieGoreng);
console.log("Harga Capcay = Rp." + capcay);
console.log("Harga Total = Rp." + totalSebelumDiskon);
console.log(`Diskon = ${diskon * 100}%`);
console.log("Harga Setelah Diskon = Rp." + totalSetelahDiskon);
console.log("pembayaran = Rp." + pembayaran,);
console.log("Kembalian = Rp." + kembalian,);