function cariJuaraKelas(siswa) {
  const juara = siswa.filter((s) => {
    const totalNilai = s.mtk + s.indo + s.ingg + s.dpk + s.agama;
    return totalNilai >= 475 && s.kehadiran === 100;
  });

  return juara;
}

const siswa = [
  { nama: 'Andi', mtk: 100, indo: 100, ingg: 100, dpk: 100, agama: 100, kehadiran: 100 },
  { nama: 'Budi', mtk: 85, indo: 90, ingg: 80, dpk: 85, agama: 85, kehadiran: 100 },
  { nama: 'Cindy', mtk: 90, indo: 95, ingg: 85, dpk: 90, agama: 85, kehadiran: 100 },
  { nama: 'Dani', mtk: 80, indo: 85, ingg: 90, dpk: 80, agama: 85, kehadiran: 100 },
  { nama: 'Eka', mtk: 95, indo: 90, ingg: 95, dpk: 100, agama: 95, kehadiran: 100 },
  { nama: 'Funi', mtk: 95, indo: 90, ingg: 95, dpk: 100, agama: 95, kehadiran: 90 },
  { nama: 'Gina', mtk: 75, indo: 85, ingg: 95, dpk: 90, agama: 95, kehadiran: 100 },
  { nama: 'Hadi', mtk: 80, indo: 80, ingg: 85, dpk: 80, agama: 90, kehadiran: 100 },
  { nama: 'Ika', mtk: 90, indo: 85, ingg: 90, dpk: 95, agama: 90, kehadiran: 100 },
  { nama: 'Joko', mtk: 70, indo: 90, ingg: 80, dpk: 85, agama: 95, kehadiran: 100 },
  { nama: 'Kiki', mtk: 100, indo: 95, ingg: 100, dpk: 100, agama: 95, kehadiran: 100 },
  { nama: 'Lia', mtk: 85, indo: 90, ingg: 85, dpk: 80, agama: 90, kehadiran: 100 },
  { nama: 'Mia', mtk: 90, indo: 80, ingg: 90, dpk: 85, agama: 95, kehadiran: 100 },
  { nama: 'Nina', mtk: 80, indo: 75, ingg: 80, dpk: 70, agama: 80, kehadiran: 100 },
  { nama: 'Oki', mtk: 95, indo: 85, ingg: 100, dpk: 90, agama: 100, kehadiran: 100 },
  { nama: 'Pia', mtk: 70, indo: 80, ingg: 85, dpk: 75, agama: 70, kehadiran: 100 },
];

const juaraKelas = cariJuaraKelas(siswa);

if (juaraKelas.length > 0) {
  console.log('Siswa yang menjadi juara kelas:');
  juaraKelas.forEach((s) => console.log(s.nama));
} else {
  console.log('Tidak ada siswa yang memenuhi syarat sebagai juara kelas.');
}