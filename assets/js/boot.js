/* runs before paint: apply the stored theme so there is no flash */
(function () {
  var root = document.documentElement, theme = null;
  try { theme = localStorage.getItem("theme"); } catch (e) {}
  if (!theme) {
    theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  root.setAttribute("data-theme", theme);
})();
