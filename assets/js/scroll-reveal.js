// Reveals elements with class "reveal" (or "float-on-scroll") as they scroll into view.
// No dependencies. Adds "is-visible" when the element enters the viewport.
(function () {
  function init() {
    var targets = document.querySelectorAll('.reveal, .float-on-scroll');
    if (!targets.length) return;

    // Fallback for very old browsers: just show everything.
    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // reveal once, then stop watching
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    });

    targets.forEach(function (el) { observer.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
