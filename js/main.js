document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = this.firstName.value;
  const lastName = this.lastName.value;
  const email = this.email.value;
  const company = this.company.value;

  const subject = `Let's have a chat, Bloome!`;
  const bodyLines = [
    `Hi Bloome team,`,
    ``,
    `I'd love to have a chat about how you could help my business grow.`,
    ``,
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
  ];
  if (company) bodyLines.push(`Company: ${company}`);
  bodyLines.push(``, `Looking forward to hearing from you!`);
  const body = bodyLines.join('\n');

  window.location.href = `mailto:support@bloomebusiness.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

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

(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
