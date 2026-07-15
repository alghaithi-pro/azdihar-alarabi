document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const langBtn = document.getElementById('langToggle');
  const translated = document.querySelectorAll('[data-ar][data-en]');

  function setLang(lang) {
    translated.forEach(el => {
      el.textContent = lang === 'ar' ? el.dataset.ar : el.dataset.en;
    });
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
    localStorage.setItem('site-lang', lang);
  }

  const savedLang = localStorage.getItem('site-lang') || 'ar';
  setLang(savedLang);

  langBtn.addEventListener('click', () => {
    const current = html.getAttribute('lang') === 'ar' ? 'en' : 'ar';
    setLang(current);
  });

  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));

  document.getElementById('year').textContent = new Date().getFullYear();
});
