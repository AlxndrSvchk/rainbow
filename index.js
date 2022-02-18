const [...btns] = document.querySelectorAll(".btn");
const clone = document.querySelector('.clone')
const content = document.querySelector(".content");
const redBtn = document.getElementById("red");
const orangeBtn = document.getElementById("orange");
const yellowBtn = document.getElementById("yellow");
const greenBtn = document.getElementById("green");
const cyanBtn = document.getElementById("cyan");
const blueBtn = document.getElementById("blue");
const purpleBtn = document.getElementById("purple");

const wrapperBtn = document.querySelector(".btns");

let visible = true;

redBtn.addEventListener("click", (e) => {
  document.body.classList.toggle("bg-red");
  wrapperBtn.classList.toggle("bg-red");
});

orangeBtn.addEventListener("click", (e) => {
  btns.map((btn) => {
    btn.classList.toggle("colored");
  });
});

yellowBtn.addEventListener("click", (e) => {
  purpleBtn.innerHTML = `Меня поменяли (`;

});

greenBtn.addEventListener("click", (e) => {
  content.classList.toggle("show");
});

clone.addEventListener('click', evt => {

  if(evt.target.dataset.cyan === 'true') {
    const temp = cyanBtn.cloneNode(true);
    btns.splice(4, 0, temp); // для работы оранжевой кнопки
    cyanBtn.insertAdjacentElement("afterend", temp);
  }
})

blueBtn.addEventListener("click", (e) => {
  btns[0].classList.add("delete");
  setTimeout(() => {
    btns[0].classList.add("hide");
  }, 1500);
  visible = false;
});

purpleBtn.addEventListener("click", (e) => {
  if (visible) {
    wrapperBtn.insertAdjacentHTML(
      "afterend",
      `
            <h2>Кнопка есть !</h2>
        `
    );
  } else {
    redBtn.classList.remove("delete");
    redBtn.classList.remove("hide");
    redBtn.classList.add("grow");
    setTimeout(() => {
      redBtn.classList.remove("grow");
    }, 1500);
    visible = true;
  }
});

