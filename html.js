function createBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  return box;
}

function createRow(num) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < num; i++) {
    row.insertAdjacentElement("beforeend", createBox());
  }
  return row;
}

function createGrid(x, y) {
  const main = document.createElement("div");
  main.classList.add("main");
  for (let i = 0; i < y; i++) {
    main.insertAdjacentElement("beforeend", createRow(x));
  }
  return main;
}

const main = document.getElementById("mainContainer");
main.insertAdjacentElement("beforeend", createGrid(16, 16));
