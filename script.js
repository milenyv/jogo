function toggleOptions() {
  const list = document.getElementById("options-list");
  list.style.display = list.style.display === "block" ? "none" : "block";
}

function selectOption(text, link) {
  document.getElementById("selected-option").textContent = text;
  document.getElementById("options-list").style.display = "none";
  window.location.href = link;
}

// Fecha opções ao clicar fora do menu
document.addEventListener("click", function(event) {
  const wrapper = document.querySelector(".custom-select-wrapper");
  if (!wrapper.contains(event.target)) {
    document.getElementById("options-list").style.display = "none";
  }
});
