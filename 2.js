function cariBilanganTerbesar(bil1, bil2, bil3) {
  if (bil1 >= bil2 && bil1 >= bil3) {
      return bil1;
  } else if (bil2 >= bil1 && bil2 >= bil3) {
      return bil2;
  } else {
      return bil3;
  }
}

const bilangan1 = 5;
const bilangan2 = 1;
const bilangan3 = 8;

const terbesar = cariBilanganTerbesar(bilangan1, bilangan2, bilangan3);
console.log("Bilangan terbesar adalah: " + terbesar);
