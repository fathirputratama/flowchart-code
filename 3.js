const jam = 1;
const menit = 30;
const detik = 40;

function konversiTotalDetik(jam, menit, detik){
    let totalDetik = (jam * 3600) + (menit * 60) + detik
    return totalDetik
}

console.log(konversiTotalDetik(jam, menit, detik));