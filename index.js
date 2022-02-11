const [...btns] = document.querySelectorAll(".btn");
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
    //   btns[btns.length - 1].innerHTML = `Меня поменяли (`;
    // или так
    purpleBtn.innerHTML = `Меня поменяли (`;

});

greenBtn.addEventListener("click", (e) => {
  content.classList.toggle("show");
});

cyanBtn.addEventListener("click", (e) => {
  const temp = cyanBtn.cloneNode(true);
  btns.splice(4, 0, temp); // для работы оранжевой кнопки
  cyanBtn.insertAdjacentElement("afterend", temp);
});

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
      // или redBtn
    btns[0].classList.remove("delete");
    btns[0].classList.remove("hide");
    btns[0].classList.add("grow");
    setTimeout(() => {
      btns[0].classList.remove("grow");
    }, 1500);
    visible = true;
  }
});

