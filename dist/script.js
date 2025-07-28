"use strict";
const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark__theme");
    });
}
