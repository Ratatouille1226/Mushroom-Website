const toggleBtn: HTMLElement | null = document.getElementById("theme-toggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark__theme");
});
}
