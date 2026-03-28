/* ============================================================
   MAIN.JS — Shared scripts
   ============================================================ */

/* 1. NAV SCROLL — index.html only (nav--hero) */
(function () {
  var nav = document.getElementById('nav');
  var hero = document.getElementById('hero');
  if (!nav || !hero || !nav.classList.contains('nav--hero')) return;
  var io = new IntersectionObserver(function (entries) {
    nav.classList.toggle('scrolled', !entries[0].isIntersecting);
  }, { threshold: 0.05 });
  io.observe(hero);
}());

/* 2. MOBILE NAV TOGGLE + FOCUS TRAP */
(function () {
  var toggle = document.getElementById('nav-toggle');
  var navLinks = document.getElementById('nav-links');
  if (!toggle || !navLinks) return;

  var FOCUSABLE = 'a[href], button:not([disabled])';
  var trapHandler = null;

  function openMenu() {
    navLinks.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    var focusable = Array.prototype.slice.call(navLinks.querySelectorAll(FOCUSABLE));
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    trapHandler = function (e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    };
    navLinks.addEventListener('keydown', trapHandler);
    if (first) first.focus();
  }

  function closeMenu() {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    if (trapHandler) {
      navLinks.removeEventListener('keydown', trapHandler);
      trapHandler = null;
    }
    toggle.focus();
  }

  toggle.addEventListener('click', function () {
    if (navLinks.classList.contains('open')) closeMenu(); else openMenu();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) closeMenu();
  });

  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
}());

/* 3. BANNER CANVAS ANIMATION */
(function () {
  var canvas = document.getElementById('banner-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function drawReactIcon(cx, cy, size, opacity, rotation) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.strokeStyle = 'rgba(255,255,255,' + opacity + ')';
    ctx.lineWidth = size * 0.05;
    ctx.fillStyle = 'rgba(255,255,255,' + opacity + ')';
    var rx = size * 0.9;
    var ry = size * 0.32;
    for (var i = 0; i < 3; i++) {
      ctx.save();
      ctx.rotate((Math.PI / 3) * i);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.13, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  var COUNT = 18;
  var particles = [];
  for (var i = 0; i < COUNT; i++) {
    particles.push({
      x:       Math.random() * canvas.width,
      y:       Math.random() * canvas.height,
      size:    18 + Math.random() * 28,
      vx:      (Math.random() - 0.5) * 0.35,
      vy:      (Math.random() - 0.5) * 0.25,
      opacity: 0.06 + Math.random() * 0.12,
      rot:     Math.random() * Math.PI * 2,
      vrot:    (Math.random() - 0.5) * 0.008
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var j = 0; j < particles.length; j++) {
      var p = particles[j];
      p.x   += p.vx;
      p.y   += p.vy;
      p.rot += p.vrot;
      if (p.x < -60)                p.x = canvas.width  + 60;
      if (p.x > canvas.width + 60)  p.x = -60;
      if (p.y < -60)                p.y = canvas.height + 60;
      if (p.y > canvas.height + 60) p.y = -60;
      drawReactIcon(p.x, p.y, p.size, p.opacity, p.rot);
    }
    requestAnimationFrame(animate);
  }
  animate();
}());

/* 4. COPYRIGHT YEAR */
(function () {
  var el = document.querySelector('.footer__year');
  if (el) el.textContent = new Date().getFullYear();
}());
