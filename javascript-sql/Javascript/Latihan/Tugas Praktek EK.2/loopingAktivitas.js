for(i = 1; i <= 20; i++) {
    if(i % 2 === 0 && i % 3 === 0){
        console.log(i + "- Mendapatkan Sertifikasi")
    }else if(i % 2 == 0){
        console.log(i + "-Mengikuti pelatihan")
    }else if(i % 3 == 0){
        console.log(i + "-Mengikuti Uji Kompetensi")
    }
    else if(i % 2 == 1){
        console.log(i + "-Apel Pagi")
    }else{
        console.log(i);
    }
}