const select = document.querySelector(".select");
const selected = document.querySelector(".selected");
const arrow = document.querySelector(".logo i");
const menu = document.querySelector(".menu");
const options = document.querySelectorAll(".menu li");

select.addEventListener("click", () => {
  select.classList.toggle("shadow");
  arrow.classList.toggle("rotate");
  menu.classList.toggle("menu-open");
});

options.forEach((option) => {
  // console.log(option.innerText);
  option.addEventListener("click", () => {
    console.log(option.innerText);
    select.classList.remove("shadow");
    arrow.classList.remove("rotate");
    menu.classList.remove("menu-open");
    selected.innerText = option.innerText;

    options.forEach((option) => {
      option.classList.remove("active");
    });

    option.classList.add("active");
  });
});
