// data/menengah.js — Bank soal Level Menengah (20 soal).
// Format "words": [kata Inggris, arti Indonesia, true bila kata ini mengisi bagian rumpang "_____"].
// "translation" = arti kalimat utuh.

const questionsMenengah = [
  {
    q: "If I _____ enough money, I would buy a new car right now.",
    options: ["have", "had", "would have", "had had"],
    answer: 1,
    explanation: "Ini adalah Second Conditional (pengandaian tidak nyata saat ini). Rumusnya: If + Simple Past (had), ... would + V1.",
    words: [["If", "jika"], ["I", "saya"], ["had", "punya (bentuk lampau)", true], ["enough", "cukup"], ["money", "uang"], ["I", "saya"], ["would", "akan"], ["buy", "membeli"], ["a", "sebuah"], ["new", "baru"], ["car", "mobil"], ["right now", "sekarang"]],
    translation: "Jika saya punya cukup uang, saya akan membeli mobil baru sekarang."
  },
  {
    q: "By the time the police arrived, the thief _____ away.",
    options: ["ran", "has run", "had run", "was running"],
    answer: 2,
    explanation: "Past Perfect ('had run') digunakan untuk kejadian yang terjadi SEBELUM kejadian lain di masa lalu (polisi datang).",
    words: [["By the time", "pada saat"], ["the", "kata sandang untuk benda tertentu"], ["police", "polisi"], ["arrived", "tiba"], ["the", "kata sandang untuk benda tertentu"], ["thief", "pencuri"], ["had run", "sudah lari", true], ["away", "menjauh"]],
    translation: "Pada saat polisi tiba, pencuri itu sudah melarikan diri."
  },
  {
    q: "The new bridge _____ by the local government next month.",
    options: ["will build", "will be built", "is built", "was built"],
    answer: 1,
    explanation: "Kalimat pasif mendatang (Future Passive Voice): 'will + be + Verb 3' ('will be built').",
    words: [["The", "kata sandang untuk benda tertentu"], ["new", "baru"], ["bridge", "jembatan"], ["will be built", "akan dibangun", true], ["by", "oleh"], ["the", "kata sandang untuk benda tertentu"], ["local", "daerah"], ["government", "pemerintah"], ["next month", "bulan depan"]],
    translation: "Jembatan baru itu akan dibangun oleh pemerintah daerah bulan depan."
  },
  {
    q: "She enjoys _____ books in her free time.",
    options: ["to read", "reading", "read", "reads"],
    answer: 1,
    explanation: "Kata kerja 'enjoy' selalu diikuti oleh Gerund (Verb-ing), yaitu 'reading'.",
    words: [["She", "dia (perempuan)"], ["enjoys", "menikmati"], ["reading", "membaca", true], ["books", "buku-buku"], ["in", "pada"], ["her", "miliknya (perempuan)"], ["free time", "waktu luang"]],
    translation: "Dia (perempuan) menikmati membaca buku-buku di waktu luangnya."
  },
  {
    q: "I am not used to _____ up so early in the morning.",
    options: ["wake", "waking", "woke", "woken"],
    answer: 1,
    explanation: "Frasa 'be used to' (terbiasa dengan) harus diikuti oleh Gerund (Verb-ing), bukan V1.",
    words: [["I", "saya"], ["am not used to", "tidak terbiasa"], ["waking", "bangun (bentuk -ing)", true], ["up", "bangun"], ["so", "begitu"], ["early", "pagi"], ["in the morning", "di pagi hari"]],
    translation: "Saya tidak terbiasa bangun begitu pagi."
  },
  {
    q: "You _____ turn off your phone during the examination. It is strictly forbidden.",
    options: ["should", "might", "must", "could"],
    answer: 2,
    explanation: "'Must' digunakan untuk menunjukkan kewajiban mutlak atau keharusan aturan yang sangat kuat.",
    words: [["You", "kamu"], ["must", "harus", true], ["turn off", "mematikan"], ["your", "milikmu"], ["phone", "telepon"], ["during", "selama"], ["the", "kata sandang untuk benda tertentu"], ["examination", "ujian"], ["It", "itu"], ["is", "adalah"], ["strictly", "secara ketat"], ["forbidden", "dilarang"]],
    translation: "Kamu harus mematikan teleponmu selama ujian. Itu sangat dilarang."
  },
  {
    q: "The man _____ lives next door is a famous musician.",
    options: ["which", "whose", "who", "whom"],
    answer: 2,
    explanation: "Relative pronoun 'who' digunakan untuk menggantikan subjek berupa orang ('The man').",
    words: [["The", "kata sandang untuk benda tertentu"], ["man", "pria"], ["who", "yang", true], ["lives", "tinggal"], ["next door", "di sebelah"], ["is", "adalah"], ["a", "seorang"], ["famous", "terkenal"], ["musician", "musisi"]],
    translation: "Pria yang tinggal di sebelah rumah adalah seorang musisi terkenal."
  },
  {
    q: "Neither my mother nor my sisters _____ coming to the party tonight.",
    options: ["is", "are", "was", "be"],
    answer: 1,
    explanation: "Aturan 'Neither... nor...': kata kerja menyesuaikan dengan subjek terdekat ('my sisters' - jamak) -> 'are'.",
    words: [["Neither", "tidak (salah satu pun)"], ["my", "milik saya"], ["mother", "ibu"], ["nor", "maupun"], ["my", "milik saya"], ["sisters", "saudara perempuan"], ["are", "sedang (kata bantu jamak)", true], ["coming", "datang"], ["to", "ke"], ["the", "kata sandang untuk benda tertentu"], ["party", "pesta"], ["tonight", "malam ini"]],
    translation: "Baik ibu maupun saudara-saudara perempuan saya tidak akan datang ke pesta malam ini."
  },
  {
    q: "He asked me where I _____ the day before.",
    options: ["go", "went", "had gone", "have gone"],
    answer: 2,
    explanation: "Reported Speech untuk pertanyaan masa lalu bergeser dari Simple Past menjadi Past Perfect ('had gone').",
    words: [["He", "dia (laki-laki)"], ["asked", "bertanya"], ["me", "saya"], ["where", "ke mana"], ["I", "saya"], ["had gone", "sudah pergi", true], ["the day before", "sehari sebelumnya"]],
    translation: "Dia bertanya kepada saya ke mana saya pergi sehari sebelumnya."
  },
  {
    q: "I would rather stay home than _____ out in this terrible rain.",
    options: ["go", "going", "to go", "went"],
    answer: 0,
    explanation: "Struktur 'would rather [Verb 1] than [Verb 1]' membutuhkan kata kerja bentuk dasar tanpa 'to'.",
    words: [["I", "saya"], ["would rather", "lebih suka"], ["stay", "tinggal"], ["home", "rumah"], ["than", "daripada"], ["go", "pergi", true], ["out", "keluar"], ["in", "di"], ["this", "ini"], ["terrible", "buruk"], ["rain", "hujan"]],
    translation: "Saya lebih suka tinggal di rumah daripada keluar di hujan yang buruk ini."
  },
  {
    q: "We need to _____ the meeting because the manager is ill.",
    options: ["put off", "call in", "take off", "turn down"],
    answer: 0,
    explanation: "Phrasal verb 'put off' berarti menunda (postpone).",
    words: [["We", "kami"], ["need", "perlu"], ["to", "untuk"], ["put off", "menunda", true], ["the", "kata sandang untuk benda tertentu"], ["meeting", "rapat"], ["because", "karena"], ["the", "kata sandang untuk benda tertentu"], ["manager", "manajer"], ["is", "adalah"], ["ill", "sakit"]],
    translation: "Kita perlu menunda rapat karena manajernya sakit."
  },
  {
    q: "Despite _____ hard, he failed the final examination.",
    options: ["he studied", "studying", "of studying", "he study"],
    answer: 1,
    explanation: "Preposition 'Despite' harus diikuti oleh Noun Phrase atau Gerund ('studying'), bukan klausa lengkap.",
    words: [["Despite", "meskipun"], ["studying", "belajar (bentuk -ing)", true], ["hard", "giat"], ["he", "dia (laki-laki)"], ["failed", "gagal"], ["the", "kata sandang untuk benda tertentu"], ["final", "akhir"], ["examination", "ujian"]],
    translation: "Meskipun belajar giat, dia gagal dalam ujian akhir."
  },
  {
    q: "This laptop is much more expensive _____ I expected.",
    options: ["as", "than", "that", "from"],
    answer: 1,
    explanation: "Bentuk perbandingan komparatif ('more expensive') selalu dipasangkan dengan 'than'.",
    words: [["This", "ini"], ["laptop", "laptop"], ["is", "adalah"], ["much more", "jauh lebih"], ["expensive", "mahal"], ["than", "daripada", true], ["I", "saya"], ["expected", "perkirakan"]],
    translation: "Laptop ini jauh lebih mahal daripada yang saya perkirakan."
  },
  {
    q: "I'll call you as soon as I _____ at the airport.",
    options: ["arrive", "will arrive", "arrived", "am arriving"],
    answer: 0,
    explanation: "Dalam time clause yang merujuk ke masa depan (diawali 'as soon as'), gunakan Present Simple ('arrive').",
    words: [["I'll", "saya akan"], ["call", "menelepon"], ["you", "kamu"], ["as soon as", "segera setelah"], ["I", "saya"], ["arrive", "tiba", true], ["at", "di"], ["the", "kata sandang untuk benda tertentu"], ["airport", "bandara"]],
    translation: "Saya akan meneleponmu segera setelah saya tiba di bandara."
  },
  {
    q: "She has been working here _____ five years.",
    options: ["since", "for", "from", "during"],
    answer: 1,
    explanation: "Present Perfect Continuous dengan durasi rentang waktu ('five years') menggunakan kata 'for'.",
    words: [["She", "dia (perempuan)"], ["has been working", "telah bekerja"], ["here", "di sini"], ["for", "selama", true], ["five", "lima"], ["years", "tahun"]],
    translation: "Dia (perempuan) telah bekerja di sini selama lima tahun."
  },
  {
    q: "The idiom 'spill the beans' means to _____.",
    options: ["make a big mess", "reveal a secret", "cook dinner", "waste food"],
    answer: 1,
    explanation: "Ungkapan (idiom) 'spill the beans' berarti membocorkan rahasia secara tidak sengaja.",
    words: [["The idiom", "ungkapan"], ["'spill the beans'", "membocorkan rahasia"], ["means", "berarti"], ["to", "untuk"], ["reveal a secret", "membocorkan rahasia", true]],
    translation: "Ungkapan 'spill the beans' berarti membocorkan rahasia."
  },
  {
    q: "I wish I _____ how to swim when I was younger.",
    options: ["know", "knew", "had known", "have known"],
    answer: 2,
    explanation: "Penyesalan atas hal di masa lalu (Past Wish) menggunakan pola 'wish + Past Perfect' ('had known').",
    words: [["I", "saya"], ["wish", "berharap"], ["I", "saya"], ["had known", "sudah tahu", true], ["how to", "cara"], ["swim", "berenang"], ["when", "ketika"], ["I", "saya"], ["was", "adalah (bentuk lampau)"], ["younger", "lebih muda"]],
    translation: "Saya berharap saya sudah tahu cara berenang ketika saya lebih muda."
  },
  {
    q: "He denied _____ the window during the break.",
    options: ["to break", "breaking", "break", "broken"],
    answer: 1,
    explanation: "Kata kerja 'deny' (menyangkal) diikuti oleh bentuk Gerund (Verb-ing) -> 'denied breaking'.",
    words: [["He", "dia (laki-laki)"], ["denied", "menyangkal"], ["breaking", "memecahkan (bentuk -ing)", true], ["the", "kata sandang untuk benda tertentu"], ["window", "jendela"], ["during", "saat"], ["the", "kata sandang untuk benda tertentu"], ["break", "istirahat"]],
    translation: "Dia menyangkal memecahkan jendela saat istirahat."
  },
  {
    q: "The report _____ sent to all team members yesterday.",
    options: ["is", "was", "were", "has been"],
    answer: 1,
    explanation: "Subjek tunggal 'The report' + kejadian pasif di masa lalu ('yesterday') -> gunakan 'was sent'.",
    words: [["The", "kata sandang untuk benda tertentu"], ["report", "laporan"], ["was", "kata bantu pasif (bentuk lampau)", true], ["sent", "dikirim"], ["to", "kepada"], ["all", "semua"], ["team members", "anggota tim"], ["yesterday", "kemarin"]],
    translation: "Laporan itu dikirim ke semua anggota tim kemarin."
  },
  {
    q: "Hardly _____ entered the room when the lights went out.",
    options: ["I had", "had I", "did I", "I did"],
    answer: 1,
    explanation: "Kalimat yang diawali adverb negatif 'Hardly' mengalami inversi (Inversion): 'Hardly + had + subject + V3'.",
    words: [["Hardly", "baru saja"], ["had I", "saya baru saja", true], ["entered", "memasuki"], ["the", "kata sandang untuk benda tertentu"], ["room", "ruangan"], ["when", "ketika"], ["the", "kata sandang untuk benda tertentu"], ["lights", "lampu"], ["went out", "padam"]],
    translation: "Saya baru saja memasuki ruangan ketika lampu-lampu padam."
  }
];
