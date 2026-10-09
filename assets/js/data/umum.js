// data/umum.js — Bank soal Level Pengetahuan Umum (40 soal).
// Setiap sesi hanya menampilkan 20 soal yang diambil acak dari bank ini.
// Soal berbahasa Indonesia, sehingga tidak memakai "words"/"translation" (panel terjemahan).

const questionsUmum = [
  {
    q: "Ibu kota negara Jepang adalah ...",
    options: ["Osaka", "Tokyo", "Kyoto", "Nagoya"],
    answer: 1,
    explanation: "Tokyo adalah ibu kota Jepang sekaligus pusat pemerintahan dan ekonomi negara tersebut. Kyoto pernah menjadi ibu kota pada masa lalu."
  },
  {
    q: "Planet yang letaknya paling dekat dengan Matahari adalah ...",
    options: ["Venus", "Bumi", "Merkurius", "Mars"],
    answer: 2,
    explanation: "Merkurius adalah planet terdekat dengan Matahari dengan jarak sekitar 58 juta kilometer, sekaligus planet terkecil di tata surya."
  },
  {
    q: "Proklamasi Kemerdekaan Indonesia dibacakan pada tanggal ...",
    options: ["17 Agustus 1945", "28 Oktober 1928", "1 Juni 1945", "10 November 1945"],
    answer: 0,
    explanation: "Proklamasi kemerdekaan Indonesia dibacakan oleh Soekarno pada 17 Agustus 1945 di Jalan Pegangsaan Timur No. 56, Jakarta."
  },
  {
    q: "Lambang unsur kimia untuk emas adalah ...",
    options: ["Ag", "Fe", "Au", "Cu"],
    answer: 2,
    explanation: "'Au' berasal dari bahasa Latin 'Aurum' yang berarti emas. Sementara Ag adalah perak, Fe besi, dan Cu tembaga."
  },
  {
    q: "Hewan tercepat di darat adalah ...",
    options: ["Kuda", "Cheetah", "Singa", "Rusa"],
    answer: 1,
    explanation: "Cheetah dapat berlari hingga sekitar 110 km/jam dalam jarak pendek, menjadikannya hewan tercepat di darat."
  },
  {
    q: "Organ tubuh manusia yang berfungsi memompa darah adalah ...",
    options: ["Paru-paru", "Hati", "Jantung", "Ginjal"],
    answer: 2,
    explanation: "Jantung memompa darah ke seluruh tubuh melalui pembuluh darah untuk menyalurkan oksigen dan nutrisi."
  },
  {
    q: "Benua terluas di dunia adalah ...",
    options: ["Afrika", "Amerika", "Asia", "Eropa"],
    answer: 2,
    explanation: "Asia adalah benua terluas dengan luas sekitar 44 juta km², mencakup hampir sepertiga daratan dunia."
  },
  {
    q: "Presiden pertama Republik Indonesia adalah ...",
    options: ["Mohammad Hatta", "Soekarno", "Soeharto", "B.J. Habibie"],
    answer: 1,
    explanation: "Ir. Soekarno adalah presiden pertama Indonesia yang menjabat sejak 1945. Mohammad Hatta menjadi wakil presiden pertama."
  },
  {
    q: "Gas yang dibutuhkan manusia untuk bernapas adalah ...",
    options: ["Karbon dioksida", "Nitrogen", "Oksigen", "Helium"],
    answer: 2,
    explanation: "Manusia menghirup oksigen yang digunakan tubuh untuk menghasilkan energi, lalu mengeluarkan karbon dioksida."
  },
  {
    q: "Jumlah benua di dunia adalah ...",
    options: ["5", "6", "7", "8"],
    answer: 2,
    explanation: "Terdapat 7 benua: Asia, Afrika, Amerika Utara, Amerika Selatan, Antartika, Eropa, dan Australia."
  },
  {
    q: "Gunung tertinggi di dunia adalah ...",
    options: ["Gunung Fuji", "Gunung Everest", "Gunung Kilimanjaro", "Gunung Mont Blanc"],
    answer: 1,
    explanation: "Gunung Everest di pegunungan Himalaya memiliki ketinggian sekitar 8.848 meter di atas permukaan laut."
  },
  {
    q: "Mata uang resmi negara Jepang adalah ...",
    options: ["Won", "Yuan", "Yen", "Baht"],
    answer: 2,
    explanation: "Yen adalah mata uang resmi Jepang. Won digunakan Korea, Yuan di Tiongkok, dan Baht di Thailand."
  },
  {
    q: "Pencipta lagu kebangsaan 'Indonesia Raya' adalah ...",
    options: ["W.R. Supratman", "Ismail Marzuki", "Kusbini", "C. Simanjuntak"],
    answer: 0,
    explanation: "Lagu 'Indonesia Raya' diciptakan oleh Wage Rudolf Supratman dan pertama kali diperdengarkan pada Sumpah Pemuda 1928."
  },
  {
    q: "Planet terbesar di tata surya adalah ...",
    options: ["Saturnus", "Jupiter", "Neptunus", "Uranus"],
    answer: 1,
    explanation: "Jupiter adalah planet terbesar di tata surya dengan diameter sekitar 11 kali diameter Bumi."
  },
  {
    q: "Alat musik berikut yang dimainkan dengan cara dipetik adalah ...",
    options: ["Drum", "Seruling", "Gitar", "Biola"],
    answer: 2,
    explanation: "Gitar dimainkan dengan cara memetik senarnya. Drum dipukul, seruling ditiup, dan biola digesek."
  },
  {
    q: "Samudra terluas di dunia adalah ...",
    options: ["Samudra Hindia", "Samudra Atlantik", "Samudra Pasifik", "Samudra Arktik"],
    answer: 2,
    explanation: "Samudra Pasifik adalah samudra terluas dan terdalam di dunia, menutupi sekitar sepertiga permukaan Bumi."
  },
  {
    q: "Angka Romawi untuk bilangan 50 adalah ...",
    options: ["X", "L", "C", "D"],
    answer: 1,
    explanation: "Dalam angka Romawi, L = 50, C = 100, D = 500, dan M = 1.000."
  },
  {
    q: "Ilmu yang mempelajari benda-benda langit disebut ...",
    options: ["Astrologi", "Astronomi", "Geologi", "Biologi"],
    answer: 1,
    explanation: "Astronomi adalah ilmu yang mempelajari benda langit dan alam semesta. Astrologi berkaitan dengan ramalan zodiak."
  },
  {
    q: "Ibu kota negara Prancis adalah ...",
    options: ["Lyon", "Marseille", "Paris", "Nice"],
    answer: 2,
    explanation: "Paris adalah ibu kota sekaligus kota terbesar di Prancis, dikenal dengan Menara Eiffel dan Museum Louvre."
  },
  {
    q: "Tim nasional yang menjuarai Piala Dunia FIFA 2022 adalah ...",
    options: ["Prancis", "Argentina", "Brasil", "Jerman"],
    answer: 1,
    explanation: "Argentina menjuarai Piala Dunia 2022 di Qatar setelah mengalahkan Prancis melalui adu penalti."
  },
  {
    q: "Zat hijau pada daun yang berperan dalam fotosintesis adalah ...",
    options: ["Klorofil", "Karoten", "Hemoglobin", "Melanin"],
    answer: 0,
    explanation: "Klorofil adalah pigmen hijau yang menyerap cahaya matahari untuk proses fotosintesis pada tumbuhan."
  },
  {
    q: "Bulan yang jumlah harinya paling sedikit dalam setahun adalah ...",
    options: ["Januari", "Februari", "April", "Juni"],
    answer: 1,
    explanation: "Februari hanya memiliki 28 hari (29 hari pada tahun kabisat), lebih sedikit dibanding bulan lainnya."
  },
  {
    q: "Bagian tumbuhan yang berfungsi menyerap air dan zat hara dari tanah adalah ...",
    options: ["Daun", "Batang", "Akar", "Bunga"],
    answer: 2,
    explanation: "Akar menyerap air dan zat hara dari dalam tanah, serta menopang tumbuhan agar berdiri tegak."
  },
  {
    q: "Satelit alami yang mengorbit Bumi adalah ...",
    options: ["Matahari", "Bulan", "Mars", "Venus"],
    answer: 1,
    explanation: "Bulan adalah satelit alami Bumi yang mengelilingi Bumi dan memengaruhi pasang surut air laut."
  },
  {
    q: "Benua dengan jumlah penduduk terbanyak di dunia adalah ...",
    options: ["Afrika", "Eropa", "Asia", "Amerika Utara"],
    answer: 2,
    explanation: "Asia memiliki penduduk terbanyak di dunia, sekitar 60% dari total populasi manusia."
  },
  {
    q: "Alat pernapasan pada ikan adalah ...",
    options: ["Paru-paru", "Insang", "Trakea", "Kulit"],
    answer: 1,
    explanation: "Ikan bernapas menggunakan insang untuk mengambil oksigen yang terlarut dalam air."
  },
  {
    q: "Lambang negara Indonesia adalah ...",
    options: ["Garuda Pancasila", "Bhinneka Tunggal Ika", "Merah Putih", "Padi dan Kapas"],
    answer: 0,
    explanation: "Garuda Pancasila adalah lambang negara Indonesia. 'Bhinneka Tunggal Ika' adalah semboyannya."
  },
  {
    q: "Penemu lampu pijar yang praktis adalah ...",
    options: ["Alexander Graham Bell", "Thomas Alva Edison", "Nikola Tesla", "Albert Einstein"],
    answer: 1,
    explanation: "Thomas Alva Edison dikenal sebagai penemu lampu pijar yang praktis dan tahan lama. Bell dikenal sebagai penemu telepon."
  },
  {
    q: "Air murni membeku pada suhu ...",
    options: ["0°C", "10°C", "100°C", "-10°C"],
    answer: 0,
    explanation: "Air murni membeku pada 0°C dan mendidih pada 100°C pada tekanan 1 atmosfer."
  },
  {
    q: "Olahraga yang menggunakan raket dan shuttlecock adalah ...",
    options: ["Tenis meja", "Bulu tangkis", "Sepak bola", "Basket"],
    answer: 1,
    explanation: "Bulu tangkis (badminton) dimainkan menggunakan raket dan shuttlecock. Tenis meja menggunakan bola pingpong."
  },
  {
    q: "Ibu kota negara Australia adalah ...",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: 2,
    explanation: "Canberra adalah ibu kota Australia. Sydney dan Melbourne adalah kota terbesarnya, bukan ibu kota negara."
  },
  {
    q: "Jumlah pemain inti dalam satu tim sepak bola adalah ...",
    options: ["9", "10", "11", "12"],
    answer: 2,
    explanation: "Satu tim sepak bola terdiri dari 11 pemain inti, termasuk penjaga gawang."
  },
  {
    q: "Kitab suci umat Islam adalah ...",
    options: ["Injil", "Taurat", "Al-Qur'an", "Weda"],
    answer: 2,
    explanation: "Al-Qur'an adalah kitab suci umat Islam. Injil, Taurat, dan Weda adalah kitab suci agama lain."
  },
  {
    q: "Lambang unsur kimia oksigen adalah ...",
    options: ["O", "Ox", "Og", "On"],
    answer: 0,
    explanation: "Simbol unsur oksigen adalah 'O'. Simbol 'Og' adalah unsur Oganesson."
  },
  {
    q: "Hewan yang dijuluki 'raja hutan' adalah ...",
    options: ["Harimau", "Singa", "Gajah", "Serigala"],
    answer: 1,
    explanation: "Singa sering dijuluki 'raja hutan' karena keberanian dan posisinya sebagai predator puncak."
  },
  {
    q: "Alat untuk mengukur suhu disebut ...",
    options: ["Barometer", "Termometer", "Higrometer", "Anemometer"],
    answer: 1,
    explanation: "Termometer mengukur suhu. Barometer mengukur tekanan udara, higrometer mengukur kelembapan, dan anemometer mengukur kecepatan angin."
  },
  {
    q: "Proses tumbuhan hijau membuat makanan dengan bantuan cahaya matahari disebut ...",
    options: ["Respirasi", "Fotosintesis", "Transpirasi", "Fermentasi"],
    answer: 1,
    explanation: "Fotosintesis adalah proses tumbuhan mengubah air dan karbon dioksida menjadi makanan (glukosa) dengan bantuan cahaya matahari dan klorofil."
  },
  {
    q: "Nilai π (pi) dalam matematika mendekati ...",
    options: ["2,14", "3,14", "4,14", "1,14"],
    answer: 1,
    explanation: "Nilai π (pi) adalah perbandingan keliling dan diameter lingkaran, nilainya sekitar 3,14 atau 22/7."
  },
  {
    q: "Lagu kebangsaan Indonesia berjudul ...",
    options: ["Garuda Pancasila", "Indonesia Raya", "Tanah Airku", "Rayuan Pulau Kelapa"],
    answer: 1,
    explanation: "Lagu kebangsaan Indonesia adalah 'Indonesia Raya' yang diciptakan oleh W.R. Supratman."
  },
  {
    q: "Ibu kota negara Italia adalah ...",
    options: ["Milan", "Venice", "Roma", "Napoli"],
    answer: 2,
    explanation: "Roma adalah ibu kota Italia, dikenal sebagai kota dengan sejarah peradaban Romawi kuno."
  }
];
