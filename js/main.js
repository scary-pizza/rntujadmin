// dashboard section javascript

const screenWidth = window.innerWidth;
console.log(screenWidth);

document.getElementById("toggle-btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("collapsed");
});

document
  .getElementById("toggle-btn-small-screen")
  .addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("collapsed");
  });


// Active link highlighting

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav li a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});


// Side menu accordiance

document.addEventListener("DOMContentLoaded", function () {
  // collect all accordion collapse panels on the page
  const collapses = Array.from(
    document.querySelectorAll(".accordion-collapse"),
  );

  if (!collapses.length) return;

  // 1) remove any data-bs-parent to avoid Bootstrap auto-grouping within separate accordions
  collapses.forEach((c) => c.removeAttribute("data-bs-parent"));

  // 2) On initial load: if more than one is shown, keep only the first shown open
  const firstShown = collapses.find((c) => c.classList.contains("show"));
  collapses.forEach((c) => {
    if (c !== firstShown && c.classList.contains("show")) {
      let inst =
        bootstrap.Collapse.getInstance(c) ||
        new bootstrap.Collapse(c, { toggle: false });
      inst.hide();
    }
  });

  // 3) When any panel is opening, close all other panels
  collapses.forEach((collapseEl) => {
    collapseEl.addEventListener("show.bs.collapse", function () {
      collapses.forEach((other) => {
        if (other === collapseEl) return;
        if (other.classList.contains("show")) {
          let inst =
            bootstrap.Collapse.getInstance(other) ||
            new bootstrap.Collapse(other, { toggle: false });
          inst.hide();
        }
      });
    });
  });
});
