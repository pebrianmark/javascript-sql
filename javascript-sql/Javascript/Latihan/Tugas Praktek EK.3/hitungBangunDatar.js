// hitungBangunDatar.js

// Persegi
function persegi(sisi) {
    const luas = sisi * sisi;
    const keliling = 4 * sisi;
    return { luas, keliling };
}

// Persegi Panjang
function persegiPanjang(panjang, lebar) {
    const luas = panjang * lebar;
    const keliling = 2 * (panjang + lebar);
    return { luas, keliling };
}
//Lingkaran
function lingkaran(jariJari) {
    const luas = 22/7 * jariJari * jariJari;
    const keliling = 2 * 22/7 * jariJari;
    return { luas, keliling };
}

//Segitiga
function segitiga(alas, tinggi) {
    const luas = (alas * tinggi) / 2;
    const keliling = alas * 3;
    return { luas, keliling };
}

console.log("===== MENGHITUNG LUAS DAN KELILING BANGUN DATAR =====");

let persegiResult = persegi(8);
let persegiPanjangResult = persegiPanjang(9, 3);
let lingkaranResult = lingkaran(6);
let segitigaResult = segitiga(6, 4);

// Output

console.log("")
console.log(">> Luas Bangun Datar <<");
console.log(`Luas Persegi Dengan Sisi 8 Adalah ${persegiResult.luas}`);
console.log(`Luas Persegi Panjang Dengan Panjang 9 Dan Lebar 3 Adalah ${persegiPanjangResult.luas}`);
console.log(`Luas Lingkaran Dengan Jari - jari 6 Adalah ${lingkaranResult.luas.toFixed(2)}`);
console.log(`Luas Segitiga Dengan Alas 6 Dan Tinggi 4 Adalah ${segitigaResult.luas}`);

console.log("")
console.log(">> Keliling Bangun Datar <<");
console.log(`Keliling Persegi Dengan Sisi 8 Adalah ${persegiResult.keliling}`);
console.log(`Keliling Persegi Panjang Dengan Panjang 9 Dan Lebar 3 Adalah ${persegiPanjangResult.keliling}`);
console.log(`Keliling Lingkaran Dengan Jari - Jari 6 Adalah ${lingkaranResult.keliling.toFixed(2)}`);
console.log(`Keliling Segitiga Dengan Sisi 6 Adalah ${segitigaResult.keliling}`);
