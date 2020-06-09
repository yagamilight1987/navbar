let state = "CLOSE";
document.getElementById("hamburger").addEventListener("click", () => {
  if (state === "CLOSE") {
    state = "OPEN";
    document.getElementById("menu-small").classList.add("open");
  } else if (state === "OPEN") {
    state = "CLOSE";
    document.getElementById("menu-small").classList.remove("open");
  }
});
