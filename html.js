function createBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  return box;
}

const main = document.getElementById("mainContainer");
main.insertAdjacentElement("beforeend", createBox());
