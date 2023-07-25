const input = document.querySelector("#font-size-control");
input.value = 22;
const text = document.querySelector("#text");
text.style.fontSize = '22px';
input.addEventListener("input", fn1);
function fn1(e) {
  text.style.fontSize = `${e.target.value}px`;
}