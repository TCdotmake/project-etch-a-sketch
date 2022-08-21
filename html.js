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

const main = document.getElementById("mainContainer");
main.insertAdjacentElement("beforeend", createGrid(60));
