let nilai = [10];
let nilaiTertinggi = 0;
let jumlahTertinggi = 0;

let input = [100, 90, 80, 70, 60, 50, 40, 30, 20, 55];

for (let i = 0; i < input.length; i++) {
  let currentNilai = input[i];
  nilai.push(currentNilai);

  if (currentNilai > nilaiTertinggi) {
      nilaiTertinggi = currentNilai;
      jumlahTertinggi = 1;
  } else if (currentNilai === nilaiTertinggi) {
      jumlahTertinggi++;
  }
}

console.log("Nilai tertinggi: " + nilaiTertinggi);
console.log("Jumlah siswa yang mendapatkan nilai tertinggi: " + jumlahTertinggi);
