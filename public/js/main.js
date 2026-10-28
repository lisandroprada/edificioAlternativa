(function () {
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reveals: filas de la leyenda y bloques, escalonados
  var legendItems = document.querySelectorAll('.legend li');
  var reveals = [];
  legendItems.forEach(function (el, i) { el.classList.add('reveal'); el.style.setProperty('--i', i); reveals.push(el); });
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Scroll: la aguja de la rosa gira con el avance de la página; la carta se desplaza apenas
  var chart = document.querySelector('.chart-wrap');
  var ticking = false;
  function onScroll() {
    var y = window.scrollY;
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    root.style.setProperty('--p', (y / max).toFixed(4));
    if (!reduce && chart && y < window.innerHeight * 1.2) {
      chart.style.transform = 'translate3d(0,' + (y * 0.18).toFixed(1) + 'px,0)';
    }
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  // CTA fijo: aparece al salir del primer pantallazo y se oculta en el cierre
  var cta = document.getElementById('stickyCta');
  var hero = document.getElementById('inicio');
  var cierre = document.getElementById('contacto');
  if (cta && 'IntersectionObserver' in window) {
    var heroVisible = true, cierreVisible = false;
    function sync() { cta.classList.toggle('show', !heroVisible && !cierreVisible); var rl = document.getElementById('rail'); if (rl) rl.classList.toggle('show', !heroVisible); }
    new IntersectionObserver(function (e) { heroVisible = e[0].isIntersecting; sync(); }, { threshold: 0.5 }).observe(hero);
    new IntersectionObserver(function (e) { cierreVisible = e[0].isIntersecting; sync(); }, { threshold: 0.15 }).observe(cierre);
  }

  // Galería: botones anterior/siguiente
  var strip = document.getElementById('strip');
  function step(dir) {
    var f = strip.querySelector('figure');
    var w = f ? f.getBoundingClientRect().width + 16 : 300;
    strip.scrollBy({ left: dir * w, behavior: reduce ? 'auto' : 'smooth' });
  }
  var prev = document.getElementById('prev'), next = document.getElementById('next');
  if (prev && next && strip) {
    prev.addEventListener('click', function () { step(-1); });
    next.addEventListener('click', function () { step(1); });
  }
})();
