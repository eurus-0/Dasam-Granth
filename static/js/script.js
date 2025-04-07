document.addEventListener("DOMContentLoaded", function () {
    const translitCheckbox = document.getElementById("show-transliteration");
    const englishCheckbox = document.getElementById("show-english");
  
    const translitElements = document.querySelectorAll(".transliteration");
    const englishElements = document.querySelectorAll(".english");
  
    function toggleVisibility(elements, visible) {
      elements.forEach(el => {
        el.style.display = visible ? "block" : "none";
      });
    }
  
    translitCheckbox.addEventListener("change", function () {
      toggleVisibility(translitElements, this.checked);
    });
  
    englishCheckbox.addEventListener("change", function () {
      toggleVisibility(englishElements, this.checked);
    });
  });
  