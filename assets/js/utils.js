// utils.js — Utilitas umum: keamanan HTML, pengacak soal, dan migrasi skor lama.

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function migrateHighScores() {
  const migrations = [['hs_pemula', 'hs_pemula_v2'], ['hs_menengah', 'hs_menengah_v2']];
  migrations.forEach(([oldKey, newKey]) => {
    if (localStorage.getItem(newKey) === null) {
      const oldValue = parseInt(localStorage.getItem(oldKey) || '0', 10);
      if (oldValue > 0) {
        localStorage.setItem(newKey, Math.round((oldValue / 300) * 200).toString());
      }
    }
  });
}
