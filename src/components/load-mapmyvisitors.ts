function init() {
  const script = document.createElement("script");
  const isDarkMode = document.documentElement.classList.contains("dark");
  const cl = isDarkMode ? "a8a8b8" : "1f1f1f";
  const co = isDarkMode ? "121220" : "ffffff";
  const attr = {
    src: `https://mapmyvisitors.com/map.js?cl=${cl}&w=a&t=n&d=2Bon_lY1uE2eyMefCYcbTTduHtfnLyEE__eKw7fBrtY&co=${co}`,
    id: "mapmyvisitors",
    type: "text/javascript",
  };
  Object.entries(attr).forEach(([k, v]) => script.setAttribute(k, v));
  const container = document.getElementById("mapmyvisitors-container");
  if (container) {
    container.innerHTML = "";
    container.appendChild(script);
  }
}

init();
document.addEventListener("astro:after-swap", init);
document.addEventListener("theme:change", init);
