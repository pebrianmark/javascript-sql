let headset = 225000;
let mouse = 150000;
let keyboard = 350000;

let totalBelanja = headset + mouse + keyboard;

let diskon = 0.10;
let totalDiskon = totalBelanja * diskon;

let totalSetelahDiskon = totalBelanja - totalDiskon;
let pembayaran = 800000;
let kembalian = pembayaran - totalSetelahDiskon;


console.log("===== Rincian Pembelian ====");
console.log("Headset = Rp. " + headset);
console.log("Mouse = Rp. " + mouse);
console.log("Keyboard = Rp. " + keyboard);
console.log("");
console.log("Total Belanja = Rp. " + totalBelanja);
console.log(`Diskon = ${diskon * 100}%`);
console.log("Total Setelah Diskon = Rp. " + totalSetelahDiskon);
console.log("Pembayaran = Rp. " + pembayaran);
console.log("Kembalian = Rp. " + kembalian);
