const fs = require('fs');

// Baca isi file film.json
let filmData = [];
try {
    const data = fs.readFileSync('film.json', 'utf8');
    filmData = JSON.parse(data);
} catch (err) {
    console.log('File tidak ditemukan atau format salah. Membuat data awal.');
}

// Tambahkan object data film baru
const filmBaru = [
    {
        judul: "Agak Laen",
        tahun: 2024,
        genre: ["Horor", "Komedi"]
    },
    {
        judul: "Habibie & Ainun",
        tahun: 2012,
        genre: ["Drama", "Romantis"]
    },
    {
        judul: "Dilan 1990",
        tahun: 2018,
        genre: ["Romantis"]
    }
];

// Simpan ulang isi array ke file JSON
filmData = filmBaru;
fs.writeFileSync('film.json', JSON.stringify(filmData, null, 2));

// Tampilkan seluruh film di terminal
console.log("Daftar Film:");
filmData.forEach(film => {
    console.log(`${film.judul} (${film.tahun}) - ${film.genre.join(', ')}`);
});
