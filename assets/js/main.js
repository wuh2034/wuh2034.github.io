/* dark-mode toggle (preference persists in localStorage) */
(function () {
  var root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) { /* private mode */ }
    document.querySelectorAll("[data-toggle-theme]").forEach(function (btn) {
      btn.textContent = theme === "dark" ? "☀" : "☾";
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-toggle-theme]")) {
      setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
    }
  });

  setTheme(root.getAttribute("data-theme") || "light");
})();
