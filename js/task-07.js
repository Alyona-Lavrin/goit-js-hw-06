const input = document.querySelector("#font-size-control").value="16";
const text = document.querySelector("#text");
input.addEventListener("input", fn1);
function fn1(e) {
  text.style.fontSize = `${e.target.value}px`;
}