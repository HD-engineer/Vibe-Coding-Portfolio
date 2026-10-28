const clock = document.querySelector('#clock');
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');

function updateClock() {
  clock.textContent = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit', hour12: true
  }).format(new Date());
}

function closeMenu() {
  menu.classList.remove('open');
  menu.setAttribute('aria-hidden', 'true');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menu.setAttribute('aria-hidden', String(!isOpen));
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
updateClock();
setInterval(updateClock, 30000);
