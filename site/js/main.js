document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! We will be in touch within one working day.');
  this.reset();
});

(function () {
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');
  if (!header || !hero) return;

  let lastScrollY = window.scrollY;

  function update() {
    const revealZone = hero.offsetTop + hero.offsetHeight - header.offsetHeight;
    const currentScrollY = window.scrollY;

    if (currentScrollY <= revealZone) {
      header.classList.remove('is-hidden');
    } else if (currentScrollY > lastScrollY) {
      header.classList.add('is-hidden');
    } else if (currentScrollY < lastScrollY) {
      header.classList.remove('is-hidden');
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
