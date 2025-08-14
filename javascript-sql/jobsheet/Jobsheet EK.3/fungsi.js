// fungsi Menghitung Luas Persegi

function hitungLuas(sisi){
    return sisi * sisi;
}

// fungsi Menghitung keliling Persegi

function hitungKeliling(sisi){
    return 4 * sisi;
}

// Fungsi Utama untuk Menampilkan hasil
function tampilkanPersegi(sisi){
    console.log("=============Persegi===============");
    console.log("Sisi              :", sisi);
    console.log("Luas Persegi      :", hitungLuas(sisi));
    console.log("Keliling Persegi  :", hitungKeliling(sisi));
    console.log("===================================");
}

// Pemanggilan Fungsi
tampilkanPersegi(7);
tampilkanPersegi(23);

