// main.js — Titik masuk: inisialisasi tema & skor tertinggi saat halaman dimuat.

// Init Theme & High Scores on Load
window.onload = function() {
  initTheme();
  migrateHighScores();
  updateHighScoreDisplay();
};
