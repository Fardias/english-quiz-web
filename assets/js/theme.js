// theme.js — Logika tema terang/gelap.

function initTheme() {
  if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    document.getElementById('themeToggleBtn').innerText = '☀️ Light';
  } else {
    document.documentElement.classList.remove('dark');
    document.getElementById('themeToggleBtn').innerText = '🌙 Dark';
  }
}

function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    document.getElementById('themeToggleBtn').innerText = '🌙 Dark';
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    document.getElementById('themeToggleBtn').innerText = '☀️ Light';
  }
}
