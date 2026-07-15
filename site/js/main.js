document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! We will be in touch within one working day.');
  this.reset();
});

(function () {
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('.hero');
  if (!header || !hero) return;

  function update() {
    const threshold = hero.offsetTop + hero.offsetHeight - header.offsetHeight;
    header.classList.toggle('is-hidden', window.scrollY > threshold);
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
