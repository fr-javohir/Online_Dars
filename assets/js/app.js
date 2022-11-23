var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

  const modulToggle = document.querySelectorAll(".structure__modul-header");
  const activeModul = document.querySelector(".active-modul");
  const modulBody = document.querySelectorAll(".structure__modul-body");
  const modulIcons = document.querySelectorAll(".modul-icons");
  const modulBox = document.querySelectorAll(".structure__modul-item");
  activeModul.style.height = activeModul.scrollHeight + "px";
  for (let i = 0; i < modulToggle.length; i++) {
  modulToggle[i].addEventListener("click", function () {
    if (parseInt(modulBody[i].style.height) != modulBody[i].scrollHeight) {
      modulBody[i].style.height = modulBody[i].scrollHeight + "px";
      modulIcons[i].classList.remove("fa-chevron-down");
      modulIcons[i].classList.add("fa-chevron-up");
    } else {
      modulBody[i].style.height = "0px";
      modulIcons[i].classList.add("fa-chevron-down");
      modulIcons[i].classList.remove("fa-chevron-up");
    }
    for (let j = 0; j < modulBody.length; j++) {
      if (j !== i) {
        modulBody[j].style.height = "0px";
        modulIcons[j].classList.add("fa-chevron-down");
        modulIcons[j].classList.remove("fa-chevron-up");
      }
    }
  });
  }
// ***** Opening and Clothing questions *****
const toggles = document.querySelectorAll(".question__item-header");
const activeQuiz = document.querySelector(".active");
const divContent = document.querySelectorAll(".question__item-body");
const icons = document.querySelectorAll(".quiz-icon");
const quizBox = document.querySelectorAll(".question__item");
activeQuiz.style.height = activeQuiz.scrollHeight + "px";
for (let i = 0; i < toggles.length; i++) {
toggles[i].addEventListener("click", function () {
  if (parseInt(divContent[i].style.height) != divContent[i].scrollHeight) {
    divContent[i].style.height = divContent[i].scrollHeight + "px";
    icons[i].classList.remove("fa-chevron-down");
    icons[i].classList.add("fa-chevron-up");
  } else {
    divContent[i].style.height = "0px";
    icons[i].classList.add("fa-chevron-down");
    icons[i].classList.remove("fa-chevron-up");
  }

  for (let j = 0; j < divContent.length; j++) {
    if (j !== i) {
      divContent[j].style.height = "0px";
      icons[j].classList.add("fa-chevron-down");
      icons[j].classList.remove("fa-chevron-up");
    }
  }
});
}

const headerNav = document.querySelector('.header__nav')
const closeBtn = document.querySelector('.close__btn')
const openBtn = document.querySelector('.btn__hamburger')
const overlay = document.querySelector('.overlay')

openBtn.addEventListener('click',()=>{
  headerNav.classList.add('open-menu')
  overlay.classList.add('open-menu')
})
const close = ()=>{
  headerNav.classList.remove('open-menu')
  overlay.classList.remove('open-menu')
}
closeBtn.addEventListener('click',close)
overlay.addEventListener('click',close)
