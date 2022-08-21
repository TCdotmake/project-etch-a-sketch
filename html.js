function createBox() {
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
    row.insertAdjacentElement("beforeend", createBox());
  }
  return row;
}

function createGrid(x, y) {
  const main = document.createElement("div");
  main.classList.add("main");
  if (x > 0 && y > 0) {
    for (let i = 0; i < y; i++) {
      main.insertAdjacentElement("beforeend", createRow(x));
    }
  }
  return main;
}

const main = document.getElementById("mainContainer");
main.insertAdjacentElement("beforeend", createGrid(30, 30));
