const toggle = document.getElementById("modeToggle");
const mainImage = document.getElementById("mainImage");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("night");
    mainImage.src = "assets/evil_dwiki.png";
    mainImage.alt = "Dwiki Jahat";
  } else {
    document.body.classList.remove("night");
    mainImage.src = "assets/dwiki.png";
    mainImage.alt = "Dwiki Baik";
  }
});
