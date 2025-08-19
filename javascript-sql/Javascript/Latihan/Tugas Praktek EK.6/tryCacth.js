function bagiAngka(a, b) {
    try {
        if (b === 0) {
            throw new Error("Tidak bisa membagi dengan nol!"); // Error jika pembagi adalah 0
        }
        let hasil = a / b;
        console.log("Hasil pembagian: ", hasil);
    } catch (error) {
        console.log("Error: " + error.message); // Menangkap error dan menampilkan pesan error
    }
}

let angka1 = 10;
let angka2 = 0;

bagiAngka(angka1, angka2); // Menjalankan pembagian dengan angka2 = 0

console.log("Program selesai.\n"); // Program selesai

// Menguji pembagian dengan angka yang tidak nol
angka2 = 5;
bagiAngka(angka1, angka2); // Menjalankan pembagian dengan angka2 = 5

console.log("\n");

// Variabel tidak dideklarasikan
try {
    console.log(angka1, angka22); // Variabel angka22 tidak dideklarasikan
} catch (error) {
    console.log("Error: " + error.message); // Menangkap error variabel tidak dideklarasikan
}
