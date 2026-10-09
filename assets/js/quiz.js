// quiz.js — Logika inti kuis: alur soal, penilaian, panel terjemahan, dan halaman hasil.
// Memakai variabel global questionsPemula, questionsMenengah & questionsUmum dari folder data/.

const QUESTIONS_PER_SESSION = 20; // jumlah soal yang ditampilkan tiap sesi
const LEVEL_LABELS = {
  pemula: 'LEVEL PEMULA',
  menengah: 'LEVEL MENENGAH',
  umum: 'PENGETAHUAN UMUM'
};
const HIGH_SCORE_KEYS = {
  pemula: 'hs_pemula_v2',
  menengah: 'hs_menengah_v2',
  umum: 'hs_umum_v2'
};

let currentLevel = 'pemula';
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = []; // records { qIndex, selectedOpt, isCorrect }
let translationOpen = false; // apakah panel terjemahan sedang terbuka

function getQuestionBank(level) {
  if (level === 'pemula') return questionsPemula;
  if (level === 'menengah') return questionsMenengah;
  return questionsUmum;
}

function updateHighScoreDisplay() {
  document.getElementById('highScorePemula').innerText = `${localStorage.getItem(HIGH_SCORE_KEYS.pemula) || 0} / 200`;
  document.getElementById('highScoreMenengah').innerText = `${localStorage.getItem(HIGH_SCORE_KEYS.menengah) || 0} / 200`;
  document.getElementById('highScoreUmum').innerText = `${localStorage.getItem(HIGH_SCORE_KEYS.umum) || 0} / 200`;
}

function showLevelSelect() {
  document.getElementById('levelSelectScreen').classList.remove('hidden');
  document.getElementById('quizScreen').classList.add('hidden');
  document.getElementById('resultScreen').classList.add('hidden');
  document.getElementById('headerResetBtn').classList.add('hidden');
  updateHighScoreDisplay();
}

function startQuiz(level) {
  currentLevel = level;
  // Acak bank soal, lalu ambil 20 soal. Bank boleh berisi lebih dari 20
  // (Pengetahuan Umum: 40 soal), sehingga tiap sesi menampilkan 20 soal acak yang berbeda.
  const bank = shuffleArray(getQuestionBank(level));
  currentQuestions = bank.slice(0, Math.min(QUESTIONS_PER_SESSION, bank.length));
  currentIndex = 0;
  score = 0;
  userAnswers = [];

  document.getElementById('levelSelectScreen').classList.add('hidden');
  document.getElementById('resultScreen').classList.add('hidden');
  document.getElementById('quizScreen').classList.remove('hidden');
  document.getElementById('headerResetBtn').classList.remove('hidden');

  document.getElementById('quizLevelBadge').innerText = LEVEL_LABELS[level] || 'LEVEL';

  renderQuestion();
}

function renderQuestion() {
  const qData = currentQuestions[currentIndex];
  
  // Update stats header
  document.getElementById('quizProgressText').innerText = `SOAL ${currentIndex + 1} DARI ${currentQuestions.length}`;
  document.getElementById('quizScoreText').innerText = `SKOR: ${score}`;
  
  // Update progress bar width
  const progressPercent = ((currentIndex + 1) / currentQuestions.length) * 100;
  document.getElementById('progressBar').style.width = `${progressPercent}%`;

  // Set Question text
  document.getElementById('questionText').innerText = qData.q;

  // Reset & isi panel terjemahan (tertutup secara default)
  closeTranslation();
  renderTranslation(qData);
  // Tombol terjemahan hanya relevan untuk soal berbahasa Inggris (punya data "words")
  document.getElementById('translateBtn').classList.toggle('hidden', !qData.words);

  // Render Options
  const optionsBox = document.getElementById('optionsContainer');
  optionsBox.innerHTML = '';

  qData.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = `option-btn w-full text-left p-4 border-2 border-black dark:border-white font-medium text-sm sm:text-base flex items-center justify-between hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors`;
    btn.onclick = () => selectOption(idx);
    
    btn.innerHTML = `
      <div class="flex items-center space-x-3">
        <span class="w-7 h-7 border-2 border-black dark:border-white font-bold text-xs flex items-center justify-center uppercase bg-zinc-100 dark:bg-zinc-800 shrink-0">
          ${String.fromCharCode(65 + idx)}
        </span>
        <span>${escapeHtml(opt)}</span>
      </div>
      <span class="status-icon font-bold"></span>
    `;
    optionsBox.appendChild(btn);
  });

  // Hide Explanation & Disable Next button
  const expBox = document.getElementById('explanationBox');
  expBox.classList.remove('border-green-600', 'border-red-600');
  expBox.classList.add('border-black', 'dark:border-white');
  expBox.classList.add('hidden');

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.disabled = true;
  nextBtn.classList.add('opacity-50', 'cursor-not-allowed');
  nextBtn.innerText = currentIndex === currentQuestions.length - 1 ? 'Selesai →' : 'Lanjut →';
}

function renderTranslation(qData) {
  const wordList = document.getElementById('wordList');
  const sentenceElem = document.getElementById('sentenceTranslation');
  const answered = userAnswers[currentIndex] !== undefined;
  wordList.innerHTML = '';

  if (!qData.words) {
    sentenceElem.innerText = 'Terjemahan belum tersedia untuk soal ini.';
    return;
  }

  qData.words.forEach(([en, id, isTarget]) => {
    const item = document.createElement('div');
    if (isTarget && !answered) {
      // Jangan bocorkan jawaban: kata pengisi rumpang disembunyikan sebelum dijawab
      item.className = 'flex items-center justify-between gap-2 p-2.5 border-2 border-dashed border-zinc-400 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-zinc-400 dark:text-zinc-500';
      item.innerHTML = `
        <span class="font-semibold tracking-widest">_____</span>
        <span class="opacity-60">=</span>
        <span class="text-right italic">?</span>
      `;
    } else if (isTarget) {
      item.className = 'flex items-center justify-between gap-2 p-2.5 border-2 border-green-600 bg-green-600 text-white font-bold';
      item.innerHTML = `
        <span class="font-semibold">${escapeHtml(en)}</span>
        <span class="opacity-80">=</span>
        <span class="text-right">${escapeHtml(id)}</span>
      `;
    } else {
      item.className = 'flex items-center justify-between gap-2 p-2.5 border-2 border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900';
      item.innerHTML = `
        <span class="font-semibold">${escapeHtml(en)}</span>
        <span class="opacity-60">=</span>
        <span class="text-right">${escapeHtml(id)}</span>
      `;
    }
    wordList.appendChild(item);
  });

  if (answered) {
    sentenceElem.classList.remove('italic', 'text-zinc-500', 'dark:text-zinc-400');
    sentenceElem.innerText = qData.translation || '';
  } else {
    sentenceElem.classList.add('italic', 'text-zinc-500', 'dark:text-zinc-400');
    sentenceElem.innerText = '🔒 Terjemahan kalimat lengkap muncul setelah kamu menjawab, biar nggak spoiler jawabannya.';
  }
}

function closeTranslation() {
  translationOpen = false;
  document.getElementById('optionsContainer').classList.remove('hidden');
  document.getElementById('translationBox').classList.add('hidden');
  document.getElementById('translateBtn').innerText = '🌐 Terjemahkan';
}

function toggleTranslation() {
  translationOpen = !translationOpen;
  document.getElementById('optionsContainer').classList.toggle('hidden', translationOpen);
  document.getElementById('translationBox').classList.toggle('hidden', !translationOpen);
  document.getElementById('translateBtn').innerText = translationOpen ? '✕ Tutup Terjemahan' : '🌐 Terjemahkan';
}

function selectOption(selectedIdx) {
  const qData = currentQuestions[currentIndex];
  const optionsBox = document.getElementById('optionsContainer');
  const optionButtons = optionsBox.querySelectorAll('.option-btn');

  // Prevent multiple clicks
  if (userAnswers[currentIndex] !== undefined) return;

  const isCorrect = selectedIdx === qData.answer;
  if (isCorrect) {
    score += 10;
  }

  // Record user answer
  userAnswers[currentIndex] = {
    question: qData.q,
    selected: selectedIdx,
    correct: qData.answer,
    isCorrect: isCorrect,
    explanation: qData.explanation,
    options: qData.options
  };

  // Update UI for each option button (hijau = benar, merah = salah)
  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    btn.classList.remove('hover:bg-zinc-100', 'dark:hover:bg-zinc-800', 'border-black', 'dark:border-white');

    if (idx === qData.answer) {
      btn.classList.add('bg-green-600', 'border-green-700', 'dark:border-green-500', 'text-white', 'font-bold');
      btn.querySelector('.status-icon').innerText = '✓';
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('bg-red-600', 'border-red-700', 'dark:border-red-500', 'text-white', 'font-bold', 'line-through');
      btn.querySelector('.status-icon').innerText = '✗';
    } else {
      btn.classList.add('border-black', 'dark:border-white', 'opacity-40');
    }
  });

  // Show explanation box
  const expBox = document.getElementById('explanationBox');
  const badge = document.getElementById('feedbackBadge');
  const expText = document.getElementById('explanationText');

  expBox.classList.remove('border-black', 'dark:border-white');
  if (isCorrect) {
    badge.className = 'font-black text-xs uppercase px-2.5 py-1 bg-green-600 text-white';
    badge.innerText = '✓ JAWABAN BENAR';
    expBox.classList.add('border-green-600');
  } else {
    badge.className = 'font-black text-xs uppercase px-2.5 py-1 bg-red-600 text-white';
    badge.innerText = '✗ JAWABAN SALAH';
    expBox.classList.add('border-red-600');
  }

  expText.innerText = qData.explanation;
  expBox.classList.remove('hidden');

  // Panel terjemahan ikut ter-update agar jawaban yang sudah dijawab tidak lagi disembunyikan
  renderTranslation(qData);

  // Update current score counter in header
  document.getElementById('quizScoreText').innerText = `SKOR: ${score}`;

  // Enable Next button
  const nextBtn = document.getElementById('nextBtn');
  nextBtn.disabled = false;
  nextBtn.classList.remove('opacity-50', 'cursor-not-allowed');
}

function nextQuestion() {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResultScreen();
  }
}

function showResultScreen() {
  document.getElementById('quizScreen').classList.add('hidden');
  document.getElementById('resultScreen').classList.remove('hidden');

  const maxScore = currentQuestions.length * 10;
  const percentage = Math.round((score / maxScore) * 100);
  const correctCount = userAnswers.filter(a => a.isCorrect).length;
  const wrongCount = userAnswers.length - correctCount;

  document.getElementById('finalScore').innerText = `${score} / ${maxScore}`;
  document.getElementById('finalPercentage').innerText = `Akurasi: ${percentage}%`;
  document.getElementById('correctCount').innerText = correctCount;
  document.getElementById('wrongCount').innerText = wrongCount;

  // Evaluation title based on percentage
  const titleElem = document.getElementById('resultTitle');
  if (percentage >= 90) {
    titleElem.innerText = 'Luar Biasa! Sempurna!';
  } else if (percentage >= 70) {
    titleElem.innerText = 'Kerja Bagus!';
  } else if (percentage >= 50) {
    titleElem.innerText = 'Cukup Baik!';
  } else {
    titleElem.innerText = 'Perlu Lebih Banyak Latihan!';
  }

  // Save to local storage if higher
  const storageKey = HIGH_SCORE_KEYS[currentLevel];
  const prevHs = parseInt(localStorage.getItem(storageKey) || '0', 10);
  if (score > prevHs) {
    localStorage.setItem(storageKey, score.toString());
  }

  // Render evaluation list
  renderReviewList();
}

function renderReviewList() {
  const container = document.getElementById('reviewContainer');
  container.innerHTML = '';

  userAnswers.forEach((ans, idx) => {
    const item = document.createElement('div');
    item.className = `p-4 border-2 ${ans.isCorrect ? 'border-green-600 bg-green-50 dark:bg-green-950/40' : 'border-red-600 bg-red-50 dark:bg-red-950/40'} space-y-2 text-xs sm:text-sm`;

    item.innerHTML = `
      <div class="flex justify-between items-start gap-2">
        <span class="font-bold">#${idx + 1}. ${escapeHtml(ans.question)}</span>
        <span class="font-black text-xs px-2 py-0.5 shrink-0 ${ans.isCorrect ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}">
          ${ans.isCorrect ? 'BENAR (+10)' : 'SALAH (0)'}
        </span>
      </div>
      <div class="text-zinc-600 dark:text-zinc-400 space-y-1">
        <div><strong>Jawaban Kamu:</strong> ${escapeHtml(ans.options[ans.selected])}</div>
        ${!ans.isCorrect ? `<div><strong>Jawaban Seharusnya:</strong> <span class="font-semibold text-black dark:text-white">${escapeHtml(ans.options[ans.correct])}</span></div>` : ''}
      </div>
      <div class="pt-2 border-t border-dashed border-zinc-300 dark:border-zinc-700 text-xs italic">
        💡 ${escapeHtml(ans.explanation)}
      </div>
    `;
    container.appendChild(item);
  });
}

function restartQuiz() {
  startQuiz(currentLevel);
}
