let pixels = 50;

function createBox(num) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.addEventListener("mouseover", (e) => {
    e.target.classList.add("hover");
  });
  return box;
}

function createRow(num) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < num; i++) {
    row.insertAdjacentElement("beforeend", createBox(num));
  }
  return row;
}

function createGrid(num) {
  document.documentElement.style.setProperty("--pixels", num);
  const main = document.createElement("div");
  main.classList.add("main");
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      main.insertAdjacentElement("beforeend", createRow(num));
    }
  }
  return main;
}

const range = document.getElementById("rangeSlider");
range.setAttribute("value", pixels);

range.addEventListener("change", (e) => {
  console.log("e.target.value", e.target.value);
  if (e.target.value !== pixels) {
    let main = document.getElementsByClassName("main")[0];
    main.remove();
    pixels = e.target.value;
    insertMain();
  }
});

function insertMain() {
  const wrapper = document.getElementById("mainWrapper");
  wrapper.insertAdjacentElement("beforeend", createGrid(pixels));
}

insertMain();
