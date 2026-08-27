// Area filter for the project grids. Progressive enhancement: without JS the
// buttons simply do nothing and every card stays visible.
(function () {
  "use strict";

  function setUp(bar) {
    var grid = document.querySelector(bar.dataset.filterTarget);
    if (!grid) return;

    var buttons = bar.querySelectorAll(".project-filter__btn");
    var cards = grid.querySelectorAll("[data-areas]");
    var empty = bar.parentNode.querySelector(".project-filter__empty");

    function apply(area) {
      var shown = 0;

      cards.forEach(function (card) {
        var areas = (card.dataset.areas || "").split(" ");
        var match = area === "all" || areas.indexOf(area) !== -1;
        card.hidden = !match;

        // WOW.js leaves `.wow` cards at visibility:hidden until they are
        // scrolled into view. Filtering can pull a card that was never
        // revealed up into the viewport, where it would stay invisible with
        // its slot blank — so reveal anything we show.
        if (match) {
          card.style.visibility = "visible";
          shown++;
        }
      });

      buttons.forEach(function (btn) {
        var active = btn.dataset.area === area;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", active ? "true" : "false");
      });

      if (empty) empty.hidden = shown !== 0;
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.dataset.area);
      });
    });
  }

  document.querySelectorAll(".project-filter").forEach(setUp);
})();
