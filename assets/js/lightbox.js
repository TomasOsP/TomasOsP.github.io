// Click-to-zoom lightbox. Any <img class="zoomable"> opens full-screen on click.
// Optional data-full="<url>" on the image supplies a higher-res source for the zoom.
// No dependencies. Close via backdrop click, the × button, or Esc.
(function () {
  function init() {
    var imgs = document.querySelectorAll('.zoomable');
    if (!imgs.length) return;

    var overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<button class="lightbox-close" aria-label="Close">&times;</button>' +
      '<img class="lightbox-img" alt="">';
    document.body.appendChild(overlay);
    var overlayImg = overlay.querySelector('.lightbox-img');

    function open(src, alt) {
      overlayImg.src = src;
      overlayImg.alt = alt || '';
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      overlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    imgs.forEach(function (img) {
      img.addEventListener('click', function () {
        open(img.getAttribute('data-full') || img.currentSrc || img.src, img.alt);
      });
    });

    // Close on backdrop or × click, but not when clicking the zoomed image itself.
    overlay.addEventListener('click', function (e) {
      if (e.target !== overlayImg) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
