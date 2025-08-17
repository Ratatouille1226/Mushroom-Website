"use strict";
//Смена темы
const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark__theme");
    });
}
//Меню бургер
const navigation = document.querySelector('.navigation');
const openNavigation = document.querySelector('.open__navigation');
const navigationActive = document.querySelector('.navigation__active');
openNavigation?.addEventListener('click', () => {
    if (navigationActive) {
        navigationActive.classList.toggle('navigation__active-open');
    }
    openNavigation.classList.toggle("is-open");
    navigation?.classList.toggle('navigation__open');
    // 🔒 Отключаем / включаем прокрутку
    if (navigation?.classList.contains('navigation__open')) {
        document.body.style.overflow = "hidden"; // блокируем скролл
    }
    else {
        document.body.style.overflow = ""; // возвращаем как было
    }
});
//Табы (меню навигации)
const tabs = document.querySelectorAll('.tabheader__item'), tabsContent = document.querySelectorAll('.tabcontent'), tabsParent = document.querySelector('.navigation'), chooseTrays = document.querySelector('.choose__trays');
// Вызываю здесь закрытие модалки потому что табы скрываются в бургер на экранах меньше 950 пикселей
tabs.forEach((item) => {
    item.addEventListener('click', () => {
        navigation?.classList.remove('navigation__open');
        navigationActive?.classList.remove('navigation__active-open');
        openNavigation?.classList.remove("is-open"); // ✅ лучше remove чем toggle
        // ✅ Возвращаем скролл после клика по пункту меню
        document.body.style.overflow = "";
        // ✅ Скроллим в начало страницы
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
function hideTab() {
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item-active');
    });
    tabsContent.forEach((item) => {
        item.style.display = 'none';
    });
}
hideTab();
function showTab(i = 0) {
    tabs[i].classList.add('tabheader__item-active');
    tabsContent[i].style.display = 'block';
}
showTab();
tabsParent?.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTab();
                showTab(i);
            }
        });
    }
});
//Вызываю функции для того чтобы по клику на кнопку "Выбрать контейнер" открывалась страница каталога
chooseTrays?.addEventListener('click', () => {
    hideTab();
    showTab(1);
    document.body.style.overflow = "";
    // ⏳ Даем браузеру применить изменения в DOM
    requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
