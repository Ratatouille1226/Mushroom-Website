//Смена темы
const toggleBtn: HTMLElement | null = document.getElementById("theme-toggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark__theme");
});
}


//Меню бургер
const navigation = document.querySelector<HTMLElement>('.navigation');
const openNavigation = document.querySelector<HTMLElement>('.open__navigation');
const navigationActive = document.querySelector<HTMLElement>('.navigation__active');

openNavigation?.addEventListener('click', () => {
  if (navigationActive) {
    navigationActive.classList.toggle('navigation__active-open');
  }

   openNavigation.classList.toggle("is-open");
   navigation?.classList.toggle('navigation__open');
});



//Табы (меню навигации)
const tabs = document.querySelectorAll<HTMLElement>('.tabheader__item'),
      tabsContent = document.querySelectorAll<HTMLElement>('.tabcontent'),
      tabsParent = document.querySelector<HTMLElement>('.navigation');
      //Вызываю здесь закрытие модалки потому что табы скрываются в бургер на экранах меньше 950 пикселей
      tabs.forEach((item) => {
        item.addEventListener('click', () => {
          navigation?.classList.remove('navigation__open');
          navigationActive?.classList.remove('navigation__active-open');
          openNavigation?.classList.toggle("is-open");
        })
      })

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
    const target = e.target as HTMLElement;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
          if (target == item) {
              hideTab();
              showTab(i);
          }
      });
    }
});
