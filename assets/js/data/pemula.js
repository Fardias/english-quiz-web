// data/pemula.js — Bank soal Level Pemula (20 soal).
// Format "words": [kata Inggris, arti Indonesia, true bila kata ini mengisi bagian rumpang "_____"].
// "translation" = arti kalimat utuh.

const questionsPemula = [
  {
    q: "She _____ to the market every Sunday morning.",
    options: ["go", "goes", "going", "gone"],
    answer: 1,
    explanation: "Subjeknya 'She' (orang ketiga tunggal) dalam Present Simple Tense, sehingga kata kerja 'go' mendapat akhiran '-es' menjadi 'goes'.",
    words: [["She", "dia (perempuan)"], ["goes", "pergi", true], ["to", "ke"], ["the", "kata sandang untuk benda tertentu"], ["market", "pasar"], ["every", "setiap"], ["Sunday", "hari Minggu"], ["morning", "pagi"]],
    translation: "Dia (perempuan) pergi ke pasar setiap Minggu pagi."
  },
  {
    q: "I don't have _____ money in my wallet.",
    options: ["some", "any", "a", "many"],
    answer: 1,
    explanation: "Dalam kalimat negatif dengan kata benda tak terhitung (uncountable noun 'money'), kita menggunakan 'any', bukan 'some'.",
    words: [["I", "saya"], ["don't", "tidak"], ["have", "punya"], ["any", "sedikit pun", true], ["money", "uang"], ["in", "di dalam"], ["my", "milik saya"], ["wallet", "dompet"]],
    translation: "Saya tidak punya uang di dompet saya."
  },
  {
    q: "_____ you like to drink a cup of tea?",
    options: ["Would", "Do", "Are", "Will"],
    answer: 0,
    explanation: "Ungkapan sopan untuk menawarkan sesuatu secara resmi adalah 'Would you like...?'.",
    words: [["Would", "maukah", true], ["you", "kamu"], ["like", "ingin"], ["to", "untuk"], ["drink", "minum"], ["a", "sebuah"], ["cup", "cangkir"], ["of", "dari"], ["tea", "teh"]],
    translation: "Maukah kamu minum secangkir teh?"
  },
  {
    q: "My brother is older _____ me.",
    options: ["that", "from", "than", "then"],
    answer: 2,
    explanation: "Untuk perbandingan komparatif (older), kata hubung yang benar adalah 'than' (daripada), bukan 'then' atau 'that'.",
    words: [["My", "milik saya"], ["brother", "saudara laki-laki"], ["is", "adalah"], ["older", "lebih tua"], ["than", "daripada", true], ["me", "saya"]],
    translation: "Saudara laki-laki saya lebih tua daripada saya."
  },
  {
    q: "They _____ playing football in the yard right now.",
    options: ["is", "am", "are", "be"],
    answer: 2,
    explanation: "Subjek jamak 'They' pada Present Continuous Tense menggunakan auxiliary verb 'are'.",
    words: [["They", "mereka"], ["are", "sedang (kata bantu untuk jamak)", true], ["playing", "bermain"], ["football", "sepak bola"], ["in", "di"], ["the", "kata sandang untuk benda tertentu"], ["yard", "halaman"], ["right now", "sekarang"]],
    translation: "Mereka sedang bermain sepak bola di halaman sekarang."
  },
  {
    q: "We usually have dinner _____ 7:00 PM.",
    options: ["on", "in", "at", "to"],
    answer: 2,
    explanation: "Gunakan kata depan (preposition) 'at' untuk menunjukkan waktu spesifik/jam.",
    words: [["We", "kami"], ["usually", "biasanya"], ["have", "makan"], ["dinner", "makan malam"], ["at", "pada", true], ["7:00 PM", "pukul 7 malam"]],
    translation: "Kami biasanya makan malam pada pukul 7 malam."
  },
  {
    q: "This book belongs to Sarah. It is _____ book.",
    options: ["his", "her", "hers", "their"],
    answer: 1,
    explanation: "Sarah adalah perempuan, maka kata ganti kepunyaan (possessive adjective) yang diikuti kata benda 'book' adalah 'her'.",
    words: [["This", "ini"], ["book", "buku"], ["belongs to", "milik"], ["Sarah", "Sarah"], ["It", "itu"], ["is", "adalah"], ["her", "miliknya (perempuan)", true], ["book", "buku"]],
    translation: "Buku ini milik Sarah. Itu adalah bukunya (Sarah)."
  },
  {
    q: "There are two _____ on the table.",
    options: ["childs", "childrens", "children", "child"],
    answer: 2,
    explanation: "Bentuk jamak tidak teratur (irregular plural) dari 'child' adalah 'children' (tanpa 's').",
    words: [["There are", "ada"], ["two", "dua"], ["children", "anak-anak", true], ["on", "di atas"], ["the", "kata sandang untuk benda tertentu"], ["table", "meja"]],
    translation: "Ada dua anak di atas meja."
  },
  {
    q: "_____ book is this on my desk?",
    options: ["Who", "Whose", "Whom", "Which"],
    answer: 1,
    explanation: "Kata tanya 'Whose' digunakan untuk menanyakan kepemilikan (Milik siapa buku ini?).",
    words: [["Whose", "milik siapa", true], ["book", "buku"], ["is", "adalah"], ["this", "ini"], ["on", "di atas"], ["my", "milik saya"], ["desk", "meja kerja"]],
    translation: "Buku siapa ini di meja saya?"
  },
  {
    q: "Jakarta is the _____ city in Indonesia.",
    options: ["big", "bigger", "biggest", "more big"],
    answer: 2,
    explanation: "Superlative (paling besar) untuk kata sifat pendek 'big' menggunakan awalan 'the' dan akhiran '-gest' -> 'biggest'.",
    words: [["Jakarta", "Jakarta"], ["is", "adalah"], ["the", "kata sandang untuk benda tertentu"], ["biggest", "terbesar", true], ["city", "kota"], ["in", "di"], ["Indonesia", "Indonesia"]],
    translation: "Jakarta adalah kota terbesar di Indonesia."
  },
  {
    q: "I can't talk right now. I _____ a bath.",
    options: ["take", "takes", "am taking", "was taking"],
    answer: 2,
    explanation: "Kejadian yang sedang berlangsung saat ini ('right now') menggunakan Present Continuous Tense ('am taking').",
    words: [["I", "saya"], ["can't", "tidak bisa"], ["talk", "bicara"], ["right now", "sekarang"], ["I", "saya"], ["am taking", "sedang mandi", true], ["a", "sebuah"], ["bath", "mandi"]],
    translation: "Saya tidak bisa bicara sekarang. Saya sedang mandi."
  },
  {
    q: "Yesterday, I _____ a very interesting movie.",
    options: ["watch", "watched", "watching", "watches"],
    answer: 1,
    explanation: "Keterangan waktu 'Yesterday' menandakan kejadian masa lalu (Past Simple), sehingga memakai V2 ('watched').",
    words: [["Yesterday", "kemarin"], ["I", "saya"], ["watched", "menonton (bentuk lampau)", true], ["a", "sebuah"], ["very", "sangat"], ["interesting", "menarik"], ["movie", "film"]],
    translation: "Kemarin, saya menonton film yang sangat menarik."
  },
  {
    q: "My mother cooks very _____. The food always tastes great.",
    options: ["good", "well", "best", "nicely"],
    answer: 1,
    explanation: "'Well' adalah adverb (kata keterangan) yang menerangkan kata kerja 'cooks'. 'Good' adalah adjective.",
    words: [["My", "milik saya"], ["mother", "ibu"], ["cooks", "memasak"], ["very", "sangat"], ["well", "dengan baik", true], ["The", "kata sandang untuk benda tertentu"], ["food", "makanan"], ["always", "selalu"], ["tastes", "terasa"], ["great", "lezat"]],
    translation: "Ibu saya memasak dengan sangat baik. Makanannya selalu terasa lezat."
  },
  {
    q: "He was born _____ May 15th, 2000.",
    options: ["in", "on", "at", "by"],
    answer: 1,
    explanation: "Untuk tanggal lengkap yang spesifik (tanggal + bulan), gunakan preposition 'on'.",
    words: [["He", "dia (laki-laki)"], ["was born", "lahir"], ["on", "pada", true], ["May", "Mei"], ["15th, 2000", "tanggal 15 tahun 2000"]],
    translation: "Dia lahir pada 15 Mei 2000."
  },
  {
    q: "Do you have _____ eraser I can borrow?",
    options: ["a", "an", "the", "some"],
    answer: 1,
    explanation: "Kata 'eraser' diawali dengan bunyi vokal /ɪˈreɪ.sər/, sehingga menggunakan article 'an'.",
    words: [["Do", "apakah"], ["you", "kamu"], ["have", "punya"], ["an", "sebuah (untuk bunyi vokal)", true], ["eraser", "penghapus"], ["I", "saya"], ["can", "bisa"], ["borrow", "meminjam"]],
    translation: "Apakah kamu punya penghapus yang bisa saya pinjam?"
  },
  {
    q: "Tom and I are good friends. _____ study together every day.",
    options: ["They", "You", "We", "Us"],
    answer: 2,
    explanation: "Kata ganti subjek untuk 'Tom and I' (Tom dan saya) adalah 'We' (Kami/Kita).",
    words: [["Tom and I", "Tom dan saya"], ["are", "adalah"], ["good", "baik"], ["friends", "teman-teman"], ["We", "kami/kita", true], ["study", "belajar"], ["together", "bersama"], ["every day", "setiap hari"]],
    translation: "Tom dan saya adalah teman baik. Kami belajar bersama setiap hari."
  },
  {
    q: "The cat is sleeping _____ the sofa.",
    options: ["on", "in", "between", "underneath"],
    answer: 0,
    explanation: "Kucing tidur di atas permukaan sofa, jadi kata depan posisi yang paling alami adalah 'on'.",
    words: [["The", "kata sandang untuk benda tertentu"], ["cat", "kucing"], ["is sleeping", "sedang tidur"], ["on", "di atas", true], ["the", "kata sandang untuk benda tertentu"], ["sofa", "sofa"]],
    translation: "Kucing itu sedang tidur di atas sofa."
  },
  {
    q: "How _____ water should I drink every day?",
    options: ["many", "much", "often", "long"],
    answer: 1,
    explanation: "Air ('water') adalah uncountable noun, maka pertanyaan kuantitas menggunakan 'How much'.",
    words: [["How", "berapa"], ["much", "banyak (untuk benda tak terhitung)", true], ["water", "air"], ["should", "sebaiknya"], ["I", "saya"], ["drink", "minum"], ["every day", "setiap hari"]],
    translation: "Berapa banyak air yang sebaiknya saya minum setiap hari?"
  },
  {
    q: "She _____ speak English very fluently when she was young.",
    options: ["can", "could", "should", "must"],
    answer: 1,
    explanation: "'Could' adalah bentuk lampau dari 'can', digunakan untuk membicarakan kemampuan di masa lalu ('when she was young').",
    words: [["She", "dia (perempuan)"], ["could", "bisa (bentuk lampau)", true], ["speak", "berbicara"], ["English", "bahasa Inggris"], ["very", "sangat"], ["fluently", "dengan lancar"], ["when", "ketika"], ["she", "dia (perempuan)"], ["was", "adalah (bentuk lampau)"], ["young", "muda"]],
    translation: "Dia (perempuan) bisa berbicara bahasa Inggris dengan sangat lancar ketika masih muda."
  },
  {
    q: "Where _____ you go last night?",
    options: ["do", "does", "did", "were"],
    answer: 2,
    explanation: "Pertanyaan masa lalu (last night) dalam Simple Past Tense menggunakan auxiliary verb 'did'.",
    words: [["Where", "ke mana"], ["did", "kata bantu tanya (bentuk lampau)", true], ["you", "kamu"], ["go", "pergi"], ["last night", "tadi malam"]],
    translation: "Ke mana kamu pergi tadi malam?"
  }
];
