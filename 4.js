function konversiDetik(totalDetik) {
    let jam = Math.floor(totalDetik / 3600);
    let sisa_detik = totalDetik % 3600;

    let menit = Math.floor(sisa_detik / 60);
    let detik = sisa_detik % 60;

    return `${jam} jam ${menit} menit ${detik} detik`;
}

let totalDetik = 5440; 
console.log(konversiDetik(totalDetik));
