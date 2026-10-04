const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function() {
    bodyHalaman.classList.toggle('light-mode');

    if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = '🌙 Mode Gelap';
    } else {
        btnTema.textContent = '☀️ Mode Terang';
    }
});

const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function(event) {
    event.preventDefault();
    elemenModal.classList.add('show');
});

btnTutupModal.addEventListener('click', function() {
    elemenModal.classList.remove('show');
});

const skillBadges = document.querySelectorAll(".skill-badge");

skillBadges.forEach((badge) => {
  badge.addEventListener("click", () => {
    badge.classList.toggle("active");
  });
});

// ===== Toggle Bahasa (ID/EN) =====
const langToggle = document.querySelector('#langToggle');
let currentLang = 'id';

langToggle.addEventListener('click', function() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    langToggle.textContent = currentLang === 'id' ? '🌐 EN' : '🌐 ID';

    document.querySelectorAll('[data-id]').forEach((el) => {
        el.textContent = el.getAttribute('data-' + currentLang);
    });
});